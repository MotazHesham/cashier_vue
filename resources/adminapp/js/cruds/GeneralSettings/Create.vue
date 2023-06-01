<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.generalSetting.title_singular') }}</strong>
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
                      'has-items': entry.website_title,
                      'is-focused': activeField == 'website_title'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.generalSetting.fields.website_title')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.website_title"
                      @input="updateWebsiteTitle"
                      @focus="focusField('website_title')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone_1,
                      'is-focused': activeField == 'phone_1'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.generalSetting.fields.phone_1')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.phone_1"
                      @input="updatePhone1"
                      @focus="focusField('phone_1')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone_2,
                      'is-focused': activeField == 'phone_2'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.generalSetting.fields.phone_2')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.phone_2"
                      @input="updatePhone2"
                      @focus="focusField('phone_2')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.address,
                      'is-focused': activeField == 'address'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.generalSetting.fields.address')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.address"
                      @input="updateAddress"
                      @focus="focusField('address')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.generalSetting.fields.logo') }}</label>
                    <attachment
                      :route="getRoute('general-settings')"
                      :collection-name="'general_setting_logo'"
                      :media="entry.logo"
                      :max-file-size="2"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertLogoFile"
                      @file-removed="removeLogoFile"
                      :max-files="1"
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
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('GeneralSettingsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('GeneralSettingsSingle', [
      'storeData',
      'resetState',
      'setWebsiteTitle',
      'setPhone1',
      'setPhone2',
      'setAddress',
      'insertLogoFile',
      'removeLogoFile'
    ]),
    updateWebsiteTitle(e) {
      this.setWebsiteTitle(e.target.value)
    },
    updatePhone1(e) {
      this.setPhone1(e.target.value)
    },
    updatePhone2(e) {
      this.setPhone2(e.target.value)
    },
    updateAddress(e) {
      this.setAddress(e.target.value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'general_settings.index' })
          this.$eventHub.$emit('create-success')
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
