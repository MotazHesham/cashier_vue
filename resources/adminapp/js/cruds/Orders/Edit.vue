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
                <strong>{{ $t('cruds.order.title_singular') }}</strong>
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
                      $t('cruds.order.fields.code')
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
                      'has-items': entry.paid_up,
                      'is-focused': activeField == 'paid_up'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.order.fields.paid_up')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.paid_up"
                      @input="updatePaidUp"
                      @focus="focusField('paid_up')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.total_cost,
                      'is-focused': activeField == 'total_cost'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.order.fields.total_cost')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.total_cost"
                      @input="updateTotalCost"
                      @focus="focusField('total_cost')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.voucher_code_id !== null,
                      'is-focused': activeField == 'voucher_code'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.order.fields.voucher_code')
                    }}</label>
                    <v-select
                      name="voucher_code"
                      label="code"
                      :key="'voucher_code-field'"
                      :value="entry.voucher_code_id"
                      :options="lists.voucher_code"
                      :reduce="entry => entry.id"
                      @input="updateVoucherCode"
                      @search.focus="focusField('voucher_code')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.products.length !== 0,
                      'is-focused': activeField == 'products'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.order.fields.products')
                    }}</label>
                    <v-select
                      name="products"
                      label="name"
                      :key="'products-field'"
                      :value="entry.products"
                      :options="lists.products"
                      :closeOnSelect="false"
                      multiple
                      @input="updateProducts"
                      @search.focus="focusField('products')"
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
    ...mapGetters('OrdersSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('OrdersSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setCode',
      'setPaidUp',
      'setTotalCost',
      'setVoucherCode',
      'setProducts'
    ]),
    updateCode(e) {
      this.setCode(e.target.value)
    },
    updatePaidUp(e) {
      this.setPaidUp(e.target.value)
    },
    updateTotalCost(e) {
      this.setTotalCost(e.target.value)
    },
    updateVoucherCode(value) {
      this.setVoucherCode(value)
    },
    updateProducts(value) {
      this.setProducts(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'orders.index' })
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
