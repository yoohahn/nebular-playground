import properties from './engine/object-properties';
import data from './engine/data';

import { clear, notify, NAMES } from './notify';
import { render, teardown } from './table';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component: {
      mounted(element) {
        this.element = element;
        this.init = true;
        this.element.style.overflow = 'scroll';
      },
      render({ layout, context }) {
        if (this.init) {
          this.init = false;
          render(this.element, { layout, context });
        } else {
          notify({ name: NAMES.update, layout, context });
        }
      },
      resize() {},
      willUnmount() {
        clear();
        teardown(this.element);
      },
      destroy() {},
    },
  };
}
