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
                <strong>{{ $t('cruds.voucherCode.title_singular') }}</strong>
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
                      'has-items': entry.code,
                      'is-focused': activeField == 'code'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.voucherCode.fields.code')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.code"
                      @input="updateCode"
                      @focus="focusField('code')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.description,
                      'is-focused': activeField == 'description'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.voucherCode.fields.description')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.description"
                      @input="updateDescription"
                      @focus="focusField('description')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.start_date,
                      'is-focused': activeField == 'start_date'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.voucherCode.fields.start_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.start_date"
                      @input="updateStartDate"
                      @focus="focusField('start_date')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.end_date,
                      'is-focused': activeField == 'end_date'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.voucherCode.fields.end_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.end_date"
                      @input="updateEndDate"
                      @focus="focusField('end_date')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.type,
                      'is-focused': activeField == 'type'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.voucherCode.fields.type')
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
    ...mapGetters('VoucherCodesSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('VoucherCodesSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setCode',
      'setDescription',
      'setStartDate',
      'setEndDate',
      'setType'
    ]),
    updateCode(e) {
      this.setCode(e.target.value)
    },
    updateDescription(e) {
      this.setDescription(e.target.value)
    },
    updateStartDate(e) {
      this.setStartDate(e.target.value)
    },
    updateEndDate(e) {
      this.setEndDate(e.target.value)
    },
    updateType(value) {
      this.setType(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'voucher_codes.index' })
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
