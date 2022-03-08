<template>
  <div>
    <h2>Vue Bootstrap</h2>
    <div>
      <div>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
      </div>
      <div>
        <div>
          <b-nav>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: "BootstrapVue",
};
</script>