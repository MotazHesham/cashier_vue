<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('cruds.attribute.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.attribute,
                      'is-focused': activeField == 'attribute'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.attribute.fields.attribute')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.attribute"
                      @input="updateAttribute"
                      @focus="focusField('attribute')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.slug,
                      'is-focused': activeField == 'slug'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.attribute.fields.slug')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.slug"
                      @input="updateSlug"
                      @focus="focusField('slug')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.type,
                      'is-focused': activeField == 'type'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.attribute.fields.type')
                    }}</label>
                    <v-select
                      name="type"
                      :key="'type-field'"
                      :value="entry.type"
                      :options="lists.type"
                      :reduce="entry => entry.value"
                      @input="updateType"
                      @search.focus="focusField('type')"
                      @search.blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('AttributesSingle', ['entry', 'loading', 'lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('AttributesSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setAttribute',
      'setSlug',
      'setType'
    ]),
    updateAttribute(e) {
      this.setAttribute(e.target.value)
    },
    updateSlug(e) {
      this.setSlug(e.target.value)
    },
    updateType(value) {
      this.setType(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'attributes.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
