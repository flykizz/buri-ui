import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Info from '../info';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  mixins: [ChildrenMixin('buriSidebar')],

  props: {
    ...routeProps,
    dot: Boolean,
    info: [Number, String],
    title: String,
    disabled: Boolean
  },

  computed: {
    select() {
      return this.index === +this.parent.activeKey;
    }
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      route(this.$router, this);
    }
  },

  render() {
    return (
      <a
        class={bem({ select: this.select, disabled: this.disabled })}
        onClick={this.onClick}
      >
        <div class={bem('text')}>
          {this.title}
          <Info dot={this.dot} info={this.info} class={bem('info')} />
        </div>
      </a>
    );
  }
});
