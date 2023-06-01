import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import ExpenseCategoriesIndex from './cruds/ExpenseCategories'
import ExpenseCategoriesSingle from './cruds/ExpenseCategories/single'
import IncomeCategoriesIndex from './cruds/IncomeCategories'
import IncomeCategoriesSingle from './cruds/IncomeCategories/single'
import ExpensesIndex from './cruds/Expenses'
import ExpensesSingle from './cruds/Expenses/single'
import IncomesIndex from './cruds/Incomes'
import IncomesSingle from './cruds/Incomes/single'
import ExpenseReports from './cruds/ExpenseReports'
import ProductCategoriesIndex from './cruds/ProductCategories'
import ProductCategoriesSingle from './cruds/ProductCategories/single'
import ProductTagsIndex from './cruds/ProductTags'
import ProductTagsSingle from './cruds/ProductTags/single'
import ProductsIndex from './cruds/Products'
import ProductsSingle from './cruds/Products/single'
import AuditLogs from './cruds/AuditLogs'
import AttributesIndex from './cruds/Attributes'
import AttributesSingle from './cruds/Attributes/single'
import VoucherCodesIndex from './cruds/VoucherCodes'
import VoucherCodesSingle from './cruds/VoucherCodes/single'
import GeneralSettingsIndex from './cruds/GeneralSettings'
import GeneralSettingsSingle from './cruds/GeneralSettings/single'
import OrdersIndex from './cruds/Orders'
import OrdersSingle from './cruds/Orders/single'
import CashierModes from './cruds/CashierModes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    ExpenseCategoriesIndex,
    ExpenseCategoriesSingle,
    IncomeCategoriesIndex,
    IncomeCategoriesSingle,
    ExpensesIndex,
    ExpensesSingle,
    IncomesIndex,
    IncomesSingle,
    ExpenseReports,
    ProductCategoriesIndex,
    ProductCategoriesSingle,
    ProductTagsIndex,
    ProductTagsSingle,
    ProductsIndex,
    ProductsSingle,
    AuditLogs,
    AttributesIndex,
    AttributesSingle,
    VoucherCodesIndex,
    VoucherCodesSingle,
    GeneralSettingsIndex,
    GeneralSettingsSingle,
    OrdersIndex,
    OrdersSingle,
    CashierModes
  },
  strict: debug
})
