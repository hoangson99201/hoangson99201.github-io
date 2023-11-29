"use strict";
(self["webpackChunktest_management"] = self["webpackChunktest_management"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_project_report_detail_report_detail_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project/report/detail-report/detail-report.component */ 3454);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin-dashboard/admin-dashboard.component */ 2493);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project/add-project/add-project.component */ 7847);
/* harmony import */ var _components_project_add_project_manage_user_roles_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project/add-project/manage-user-roles/add-user/add-user.component */ 1738);
/* harmony import */ var _components_project_add_project_manage_user_roles_manage_user_roles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project/add-project/manage-user-roles/manage-user-roles.component */ 3498);
/* harmony import */ var _components_project_milestones_add_milestone_add_milestone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project/milestones/add-milestone/add-milestone.component */ 850);
/* harmony import */ var _components_project_milestones_detail_milestone_detail_milestone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project/milestones/detail-milestone/detail-milestone.component */ 3139);
/* harmony import */ var _components_project_milestones_milestones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/milestones/milestones.component */ 8019);
/* harmony import */ var _components_project_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project/overview/overview.component */ 1874);
/* harmony import */ var _components_project_report_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project/report/add-report/add-report.component */ 1728);
/* harmony import */ var _components_project_report_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project/report/report.component */ 8201);
/* harmony import */ var _components_project_test_run_add_test_run_add_test_run_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/project/test-run/add-test-run/add-test-run.component */ 4696);
/* harmony import */ var _components_project_test_run_detail_test_run_detail_test_run_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project/test-run/detail-test-run/detail-test-run.component */ 7240);
/* harmony import */ var _components_project_test_run_test_run_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/project/test-run/test-run.component */ 2945);
/* harmony import */ var _components_project_testcase_add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/project/testcase/add-test-case/add-test-case.component */ 909);
/* harmony import */ var _components_project_testcase_testcase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project/testcase/testcase.component */ 7174);
/* harmony import */ var _components_search_detail_project_search_detail_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search-detail-project/search-detail-project.component */ 2350);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/signup/signup.component */ 5431);
/* harmony import */ var _components_project_member_member_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project/member/member.component */ 5695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);























const routes = [{
  path: '',
  component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardComponent
}, {
  path: 'milestones/:id',
  component: _components_project_milestones_milestones_component__WEBPACK_IMPORTED_MODULE_8__.MilestonesComponent
}, {
  path: 'milestones/:id/detail/:subId',
  component: _components_project_milestones_detail_milestone_detail_milestone_component__WEBPACK_IMPORTED_MODULE_7__.DetailMilestoneComponent
}, {
  path: 'milestones-add/:id',
  component: _components_project_milestones_add_milestone_add_milestone_component__WEBPACK_IMPORTED_MODULE_6__.AddMilestoneComponent
}, {
  path: 'milestones-edit/:id',
  component: _components_project_milestones_add_milestone_add_milestone_component__WEBPACK_IMPORTED_MODULE_6__.AddMilestoneComponent
}, {
  path: 'overview/:id',
  component: _components_project_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__.OverviewComponent
}, {
  path: 'test-runs/:id',
  component: _components_project_test_run_test_run_component__WEBPACK_IMPORTED_MODULE_14__.TestRunComponent
}, {
  path: 'test-runs-add/:id',
  component: _components_project_test_run_add_test_run_add_test_run_component__WEBPACK_IMPORTED_MODULE_12__.AddTestRunComponent
}, {
  path: 'test-runs-add/:id/rerun/:rerun-id',
  component: _components_project_test_run_add_test_run_add_test_run_component__WEBPACK_IMPORTED_MODULE_12__.AddTestRunComponent
}, {
  path: 'test-runs-edit/:id',
  component: _components_project_test_run_add_test_run_add_test_run_component__WEBPACK_IMPORTED_MODULE_12__.AddTestRunComponent
}, {
  path: 'test-runs/:id/detail/:subId',
  component: _components_project_test_run_detail_test_run_detail_test_run_component__WEBPACK_IMPORTED_MODULE_13__.DetailTestRunComponent
}, {
  path: 'test-cases/:id',
  component: _components_project_testcase_testcase_component__WEBPACK_IMPORTED_MODULE_16__.TestcaseComponent
}, {
  path: 'test-cases-add/:id',
  component: _components_project_testcase_add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_15__.AddTestCaseComponent
}, {
  path: 'test-cases-edit/:id',
  component: _components_project_testcase_add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_15__.AddTestCaseComponent
}, {
  path: 'reports/:id',
  component: _components_project_report_report_component__WEBPACK_IMPORTED_MODULE_11__.ReportComponent
}, {
  path: 'reports/view/:id',
  component: _components_project_report_detail_report_detail_report_component__WEBPACK_IMPORTED_MODULE_0__.DetailReportComponent
}, {
  path: 'reports-add/:id',
  component: _components_project_report_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_10__.AddReportComponent
}, {
  path: 'project/add',
  component: _components_project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_3__.AddProjectComponent
}, {
  path: 'users-roles',
  component: _components_project_add_project_manage_user_roles_manage_user_roles_component__WEBPACK_IMPORTED_MODULE_5__.ManageUserRolesComponent
}, {
  path: 'user-role/add',
  component: _components_project_add_project_manage_user_roles_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: 'signup',
  component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__.SignUpComponent
}, {
  path: 'search/:id',
  component: _components_search_detail_project_search_detail_project_component__WEBPACK_IMPORTED_MODULE_17__.SearchDetailProjectComponent
}, {
  path: 'members/:id',
  component: _components_project_member_member_component__WEBPACK_IMPORTED_MODULE_19__.MemberComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'test-management';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-apexcharts */ 3239);
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng2-date-picker */ 7501);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-dashboard/admin-dashboard.component */ 2493);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project/add-project/add-project.component */ 7847);
/* harmony import */ var _components_project_add_project_manage_user_roles_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project/add-project/manage-user-roles/add-user/add-user.component */ 1738);
/* harmony import */ var _components_project_add_project_manage_user_roles_manage_user_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project/add-project/manage-user-roles/manage-user-roles.component */ 3498);
/* harmony import */ var _components_project_milestones_add_milestone_add_milestone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project/milestones/add-milestone/add-milestone.component */ 850);
/* harmony import */ var _components_project_milestones_detail_milestone_detail_milestone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/milestones/detail-milestone/detail-milestone.component */ 3139);
/* harmony import */ var _components_project_milestones_milestones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project/milestones/milestones.component */ 8019);
/* harmony import */ var _components_project_overview_activity_activity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project/overview/activity/activity.component */ 3483);
/* harmony import */ var _components_project_overview_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project/overview/overview.component */ 1874);
/* harmony import */ var _components_project_report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/project/report/report.component */ 8201);
/* harmony import */ var _components_project_test_run_add_result_add_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project/test-run/add-result/add-result.component */ 2363);
/* harmony import */ var _components_project_test_run_add_test_run_add_test_run_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/project/test-run/add-test-run/add-test-run.component */ 4696);
/* harmony import */ var _components_project_test_run_add_test_run_select_case_dialog_select_case_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/project/test-run/add-test-run/select-case-dialog/select-case-dialog.component */ 298);
/* harmony import */ var _components_project_test_run_confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project/test-run/confirm-close-dialog/confirm-close-dialog.component */ 8600);
/* harmony import */ var _components_project_test_run_detail_test_run_detail_test_run_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/project/test-run/detail-test-run/detail-test-run.component */ 7240);
/* harmony import */ var _components_project_test_run_detail_test_run_status_dropdown_status_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/project/test-run/detail-test-run/status-dropdown/status-dropdown.component */ 3748);
/* harmony import */ var _components_project_test_run_detail_test_run_status_select_status_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project/test-run/detail-test-run/status-select/status-select.component */ 1547);
/* harmony import */ var _components_project_test_run_rerun_dialog_rerun_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/project/test-run/rerun-dialog/rerun-dialog.component */ 7299);
/* harmony import */ var _components_project_test_run_test_run_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/project/test-run/test-run.component */ 2945);
/* harmony import */ var _components_project_testcase_add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/project/testcase/add-test-case/add-test-case.component */ 909);
/* harmony import */ var _components_project_testcase_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/project/testcase/confirm-delete-dialog/confirm-delete-dialog.component */ 2124);
/* harmony import */ var _components_project_testcase_export_dialog_export_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project/testcase/export-dialog/export-dialog.component */ 2954);
/* harmony import */ var _components_project_testcase_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/project/testcase/import-dialog/import-dialog.component */ 7900);
/* harmony import */ var _components_project_testcase_section_dialog_section_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project/testcase/section-dialog/section-dialog.component */ 2118);
/* harmony import */ var _components_project_testcase_testcase_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project/testcase/testcase.component */ 7174);
/* harmony import */ var _components_search_detail_project_search_detail_project_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/search-detail-project/search-detail-project.component */ 2350);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/signup/signup.component */ 5431);
/* harmony import */ var _core_authenticator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/authenticator */ 7047);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/header/header.component */ 9470);
/* harmony import */ var _shared_menu_project_menu_project_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/menu-project/menu-project.component */ 3695);
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/menu/menu.component */ 6534);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/new-menu/new-menu.component */ 9356);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _components_project_report_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/project/report/add-report/add-report.component */ 1728);
/* harmony import */ var _components_project_report_add_report_select_test_run_dialog_select_test_run_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/project/report/add-report/select-test-run-dialog/select-test-run-dialog.component */ 9910);
/* harmony import */ var _components_project_report_detail_report_detail_report_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/project/report/detail-report/detail-report.component */ 3454);
/* harmony import */ var _components_project_member_member_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/project/member/member.component */ 5695);
/* harmony import */ var _components_project_member_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/project/member/add-dialog/add-dialog.component */ 2107);

























































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HTTP_INTERCEPTORS,
      useClass: _core_authenticator__WEBPACK_IMPORTED_MODULE_30__.AuthInterceptor,
      multi: true
    }, _angular_common__WEBPACK_IMPORTED_MODULE_45__.DatePipe, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_43__.APP_INITIALIZER,
      useFactory: _services_auth_service__WEBPACK_IMPORTED_MODULE_31__.AuthService.authServiceFactory,
      deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_31__.AuthService],
      multi: true
    }, _components_project_testcase_section_dialog_section_dialog_component__WEBPACK_IMPORTED_MODULE_26__.SectionDialogComponent, _components_project_test_run_add_result_add_result_component__WEBPACK_IMPORTED_MODULE_13__.AddResultComponent, _components_project_test_run_detail_test_run_status_dropdown_status_dropdown_component__WEBPACK_IMPORTED_MODULE_18__.StatusDropdownComponent, _components_project_test_run_add_test_run_select_case_dialog_select_case_dialog_component__WEBPACK_IMPORTED_MODULE_15__.SelectCaseDialogComponent, _components_project_test_run_confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_16__.ConfirmCloseDialogComponent],
    imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_47__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_48__.FormsModule, ng2_date_picker__WEBPACK_IMPORTED_MODULE_49__.DpDatePickerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_51__.ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }), _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_53__.MatPaginatorModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_54__.NgApexchartsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent, _components_project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__.AddProjectComponent, _components_project_add_project_manage_user_roles_manage_user_roles_component__WEBPACK_IMPORTED_MODULE_6__.ManageUserRolesComponent, _components_project_add_project_manage_user_roles_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__.AddUserComponent, _components_project_milestones_add_milestone_add_milestone_component__WEBPACK_IMPORTED_MODULE_7__.AddMilestoneComponent, _components_project_testcase_add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_22__.AddTestCaseComponent, _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__.MenuComponent, _shared_menu_project_menu_project_component__WEBPACK_IMPORTED_MODULE_33__.MenuProjectComponent, _components_project_overview_overview_component__WEBPACK_IMPORTED_MODULE_11__.OverviewComponent, _components_project_test_run_test_run_component__WEBPACK_IMPORTED_MODULE_21__.TestRunComponent, _components_project_testcase_testcase_component__WEBPACK_IMPORTED_MODULE_27__.TestcaseComponent, _components_project_report_report_component__WEBPACK_IMPORTED_MODULE_12__.ReportComponent, _components_project_test_run_add_test_run_add_test_run_component__WEBPACK_IMPORTED_MODULE_14__.AddTestRunComponent, _components_project_milestones_milestones_component__WEBPACK_IMPORTED_MODULE_9__.MilestonesComponent, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__.SidebarComponent, _components_project_testcase_section_dialog_section_dialog_component__WEBPACK_IMPORTED_MODULE_26__.SectionDialogComponent, _components_project_test_run_detail_test_run_detail_test_run_component__WEBPACK_IMPORTED_MODULE_17__.DetailTestRunComponent, _components_project_test_run_add_result_add_result_component__WEBPACK_IMPORTED_MODULE_13__.AddResultComponent, _components_project_test_run_detail_test_run_status_dropdown_status_dropdown_component__WEBPACK_IMPORTED_MODULE_18__.StatusDropdownComponent, _components_project_test_run_add_test_run_select_case_dialog_select_case_dialog_component__WEBPACK_IMPORTED_MODULE_15__.SelectCaseDialogComponent, _components_project_test_run_confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_16__.ConfirmCloseDialogComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_36__.NewMenuComponent, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_35__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_32__.HeaderComponent, _components_project_test_run_detail_test_run_status_select_status_select_component__WEBPACK_IMPORTED_MODULE_19__.StatusSelectComponent, _components_project_milestones_detail_milestone_detail_milestone_component__WEBPACK_IMPORTED_MODULE_8__.DetailMilestoneComponent, _components_project_overview_activity_activity_component__WEBPACK_IMPORTED_MODULE_10__.ActivityComponent, _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__.SignUpComponent, _components_project_testcase_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_23__.ConfirmDeleteDialogComponent, _components_search_detail_project_search_detail_project_component__WEBPACK_IMPORTED_MODULE_28__.SearchDetailProjectComponent, _components_project_testcase_export_dialog_export_dialog_component__WEBPACK_IMPORTED_MODULE_24__.ExportDialogComponent, _components_project_test_run_rerun_dialog_rerun_dialog_component__WEBPACK_IMPORTED_MODULE_20__.RerunDialogComponent, _components_project_testcase_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_25__.ImportDialogComponent, _components_project_report_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_38__.AddReportComponent, _components_project_report_add_report_select_test_run_dialog_select_test_run_dialog_component__WEBPACK_IMPORTED_MODULE_39__.SelectTestRunDialogComponent, _components_project_report_detail_report_detail_report_component__WEBPACK_IMPORTED_MODULE_40__.DetailReportComponent, _components_project_member_member_component__WEBPACK_IMPORTED_MODULE_41__.MemberComponent, _components_project_member_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_42__.AddDialogComponent],
    imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_47__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_48__.FormsModule, ng2_date_picker__WEBPACK_IMPORTED_MODULE_49__.DpDatePickerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_51__.ToastrModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_53__.MatPaginatorModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_54__.NgApexchartsModule]
  });
})();

/***/ }),

/***/ 2493:
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardComponent": () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_base_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/base-paginator */ 9891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/new-menu/new-menu.component */ 9356);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);









const _c0 = function (a1) {
  return ["/overview", a1];
};
const _c1 = function (a1) {
  return ["/milestones", a1];
};
const _c2 = function (a1) {
  return ["/test-runs", a1];
};
const _c3 = function (a1) {
  return ["/test-cases", a1];
};
const _c4 = function (a1) {
  return ["/reports", a1];
};
function AdminDashboardComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31)(3, "div", 32)(4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 36)(9, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Test Runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Test Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Contains ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " active test runs and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " active milestones. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, project_r3.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r3.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c1, project_r3.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, project_r3.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c3, project_r3.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c4, project_r3.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r3.activeTestRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r3.activeMilestone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", project_r3.startDate ? "start date: " + project_r3.startDate : "No start date", ", ", project_r3.endDate ? "end date: " + project_r3.endDate : "no end date", " ");
  }
}
const _c5 = function () {
  return [];
};
function AdminDashboardComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AdminDashboardComponent_div_21_div_6_Template, 30, 20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-paginator", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function AdminDashboardComponent_div_21_Template_mat_paginator_page_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.handlePageEvent($event, ctx_r4.projectName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx_r0.length)("pageSize", ctx_r0.pageSize)("disabled", ctx_r0.disabled)("showFirstLastButtons", ctx_r0.showFirstLastButtons)("pageSizeOptions", ctx_r0.showPageSizeOptions ? ctx_r0.pageSizeOptions : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c5))("hidePageSize", ctx_r0.hidePageSize)("pageIndex", ctx_r0.pageIndex);
  }
}
function AdminDashboardComponent_a_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class AdminDashboardComponent extends src_app_core_base_paginator__WEBPACK_IMPORTED_MODULE_0__.BasePaginator {
  constructor(projectService, authService) {
    super();
    this.projectService = projectService;
    this.authService = authService;
    this.projects = [];
    this.activeProject = 0;
    this.completedProject = 0;
    this.projectName = '';
  }
  refresh(projectName) {
    this.projectName = projectName;
    this.projectService.getProjects(this.getParams(), projectName).subscribe(reponse => {
      this.projects = reponse.list;
      this.convertDate(this.projects);
      this.length = reponse.length;
      this.activeProject = this.projects.filter(x => !x.completed).length;
      this.completedProject = this.projects.filter(x => x.completed).length;
    });
  }
  convertDate(projects) {
    for (const project of projects) {
      if (project.endDate instanceof Array) {
        project.endDate = project.endDate[0] + "-" + String(project.endDate[1]).padStart(2, '0') + "-" + String(project.endDate[2]).padStart(2, '0');
      }
      if (project.startDate instanceof Array) {
        project.startDate = project.startDate[0] + "-" + String(project.startDate[1]).padStart(2, '0') + "-" + String(project.startDate[2]).padStart(2, '0');
      }
    }
  }
  ngOnInit() {
    this.refresh(this.projectName);
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function AdminDashboardComponent_Factory(t) {
    return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AdminDashboardComponent,
    selectors: [["admin-dashboard"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 33,
    vars: 5,
    consts: [[2, "display", "flex", "height", "100%"], [3, "selectedMenu"], [3, "onSearch"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner", 2, "display", "flex", "justify-content", "space-between"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner"], ["id", "content_container", 4, "ngIf"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [1, "sidebar-inner"], ["id", "sidebar-projects-add", "class", "sidebar-button", "routerLink", "project/add", 4, "ngIf"], [1, "top"], [1, "text-softer"], ["id", "content_container"], ["id", "activeHeader", 1, "hidden"], [1, "table", "summary", "summary-auto"], ["class", "row project flex-projects-row", "id", "project-1", 4, "ngFor", "ngForOf"], ["aria-label", "Select page", 1, "demo-paginator", 3, "length", "pageSize", "disabled", "showFirstLastButtons", "pageSizeOptions", "hidePageSize", "pageIndex", "page"], ["id", "project-1", 1, "row", "project", "flex-projects-row"], [1, "column", "summary-column", "summary-column-icon", "flex-projects-1", "icon-project-64"], [1, "column", "summary-column", "flex-projects-2"], [1, "summary-title", "text-ppp", 2, "position", "relative", "padding", "1px 0 1px 0"], [3, "routerLink"], [1, "hidden", "fav-busy"], [1, "icon-progress-inline"], [1, "summary-links", "text-secondary"], [1, "link", 3, "routerLink"], [1, "summary-description"], ["id", "sidebar-projects-add", "routerLink", "project/add", 1, "sidebar-button"]],
    template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-new-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "section")(4, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSearch", function AdminDashboardComponent_Template_app_header_onSearch_4_listener($event) {
          return ctx.refresh($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "link", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8)(12, "link", 9)(13, "link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " All Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AdminDashboardComponent_div_21_Template, 8, 9, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 19)(24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AdminDashboardComponent_a_25_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 22)(27, "strong", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " active and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "strong", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " completed projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedMenu", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActive("DASHBOARD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_PROJECT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.activeProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.completedProject);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_3__.NewMenuComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/admin-dashboard/admin-dashboard.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ 3195);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







class LoginComponent {
  constructor(authService, toastr, router) {
    this.authService = authService;
    this.toastr = toastr;
    this.router = router;
    this.user = {};
  }
  submit() {
    this.authService.login(this.user).subscribe({
      next: res => {
        console.log(res);
        let payload = JSON.parse(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(res.split('.')[1], 'base64').toString('binary'));
        const d = new Date(payload.exp * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = "token=" + res + ";" + expires + ";path=/tms";
        this.authService.load().subscribe(user => {
          src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService.activeUser = user;
        });
        this.router.navigateByUrl('/');
      },
      error: e => {
        console.log(e);
        this.toastr.error('Login failed', 'Error');
      }
    });
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 40,
    vars: 3,
    consts: [["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/auth-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/autocomplete.css", "media", "all"], ["id", "form", 1, "loginpage-form", 2, "margin", "auto", "padding-left", "0"], [1, "logo", "loginpage-logo"], ["routerLink", "/", "target", "_blank", 1, "logo-loginpage", 2, "background", "url('assets/logo.png') center center no-repeat"], ["id", "form-inner"], [1, "loginpage-installationname"], ["id", "content"], [1, "loginpage-login-text"], ["action", "index.php?/auth/login/L21pbGVzdG9uZXMvb3ZlcnZpZXcvMS1iNTk1YmU1YmQxMTdjNjQ3ZmFmMDRiN2JkYTI1NDcyZjNkMmY0NTdjZWM1MWQ0MzlhZTdmY2NmM2JhNWRhZmMz", "method", "post"], [2, "min-height", "24px"], [1, "form-group", 2, "padding-bottom", "10px"], [1, "login-inputx"], ["id", "name", "type", "text", "name", "name", "id", "name", 1, "login-input", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "login-label"], [1, "form-group", 2, "padding-bottom", "10px", "margin-top", "-9px"], ["id", "password", "type", "password", "name", "password", "id", "password", "autocomplete", "off", 1, "login-input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "login-label"], [1, "display-flex", 2, "margin-bottom", "40px"], [2, "float", "left"], ["id", "button_primary", 1, "loginpage-button-sso-disable", "loginpage-button-sso-disable-hover", "loginpage-button-sso-disable-active", 3, "click"], [1, "single-sign-on"], [2, "display", "flex", "justify-content", "center"], [3, "routerLink"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2)(3, "link", 3)(4, "link", 4)(5, "link", 5)(6, "link", 6)(7, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Test Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13)(15, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Log into Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.user.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21)(26, "div", 18)(27, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.user.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 28)(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Don't have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/signup");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: ["h1[_ngcontent-%COMP%]:after {\n  content: unset;\n}\n\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  box-shadow: 0 0 0px 1000px white inset;\n  -webkit-box-shadow: 0 0 0px 1000px white inset;\n}\n/*# sourceURL=webpack://./src/app/components/login/login.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsOENBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImgxOmFmdGVyIHtcbiAgY29udGVudDogdW5zZXQ7XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7847:
/*!*************************************************************************!*\
  !*** ./src/app/components/project/add-project/add-project.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProjectComponent": () => (/* binding */ AddProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-date-picker */ 7501);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/new-menu/new-menu.component */ 9356);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);











const _c0 = function (a1) {
  return {
    format: "YYYY-MM-DD",
    max: a1
  };
};
const _c1 = function (a1) {
  return {
    format: "YYYY-MM-DD",
    min: a1
  };
};
function AddProjectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-new-menu", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "link", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8)(12, "link", 9)(13, "link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Add Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 17)(22, "form", 18)(23, "div", 19)(24, "div", 20)(25, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_div_0_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.project.projectName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Ex: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "New Widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Intranet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Payroll Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 24)(46, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Announcement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 31)(50, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_div_0_Template_textarea_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.project.announcement = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "You can post an announcement to the project overview page. This could include links to the project's issue tracker or knowledge base, for example.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 24)(56, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_div_0_Template_input_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.project.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "The expected or scheduled start date of this project (for upcoming and not yet active projects).");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 24)(63, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_div_0_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.project.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "The expected due or end date of this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 41)(70, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddProjectComponent_div_0_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " Add Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddProjectComponent_div_0_Template_a_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.backClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "app-sidebar", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](59);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](66);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedMenu", "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.project.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.project.announcement);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.project.startDate)("dpDayPicker", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, _r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.project.endDate)("dpDayPicker", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, _r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.project.projectName.trim().length == 0);
  }
}
class AddProjectComponent {
  constructor(_location, projectService, router, toastr, authService) {
    this._location = _location;
    this.projectService = projectService;
    this.router = router;
    this.toastr = toastr;
    this.authService = authService;
    this.project = {
      projectName: ''
    };
  }
  backClicked() {
    this._location.back();
  }
  submit() {
    this.projectService.addProject(this.project).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add project success', 'Success');
        this.router.navigate(['/overview', res.projectId]);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add project failed', 'Error');
      }
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function AddProjectComponent_Factory(t) {
    return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AddProjectComponent,
    selectors: [["app-add-project"]],
    decls: 1,
    vars: 1,
    consts: [["style", "display: flex; height: 100%;", 4, "ngIf"], [2, "display", "flex", "height", "100%"], [3, "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["action", "index.php?/admin/projects/add/1", "id", "form", "onsubmit", "return App.Users.onFormSubmit( - 1);", "method", "post"], [1, "tabs"], [1, "tab-header"], ["id", "projects-tabs-project", 1, "tab1", "hidden", "current"], [1, "tab-body", "tab-frame"], [1, "tab", "tab1", "dirty-trackable", 2, "display", "block"], [1, "form-group"], ["for", "name"], [1, "form-required"], ["type", "text", "name", "name", "id", "name", "maxlength", "250", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-description"], ["for", "announcement"], [1, "form-toolbar", 2, "padding-top", "0px"], [1, "textarea-resizable"], ["rows", "6", "name", "announcement", "id", "announcement", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "ngModel", "ngModelChange"], [1, "textarea-grippie"], [1, "form-description", "form-description-full"], [1, "form-separator"], ["for", "due_on"], ["name", "startDate", 1, "form-control", "form-control-small", "dirty-trackable-datepicker", "hasDatepicker", 3, "ngModel", "dpDayPicker", "ngModelChange"], ["startDate", ""], ["name", "endDate", 1, "form-control", "form-control-small", "dirty-trackable-datepicker", "hasDatepicker", 3, "ngModel", "dpDayPicker", "ngModelChange"], ["endDate", ""], [1, "button-group", "form-buttons"], ["id", "accept", "type", "button", 1, "button", "button-left", "button-positive", "button-ok", 3, "disabled", "click"], ["routerLink", "javascript:void(0)", "id", "admin-integration-form-cancel", 1, "button", "button-left", "button-negative", "button-cancel", "save-cancel-button", 3, "click"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [2, "white-space", "normal"]],
    template: function AddProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddProjectComponent_div_0_Template, 77, 12, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_PROJECT"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__.DatePickerDirective, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_3__.NewMenuComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/add-project/add-project.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1738:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project/add-project/manage-user-roles/add-user/add-user.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/role.service */ 6888);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/new-menu/new-menu.component */ 9356);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/header/header.component */ 9470);











function AddUserComponent_div_0_option_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", role_r2.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", role_r2.roleName, " ");
  }
}
function AddUserComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-new-menu", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "link", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8)(12, "link", 9)(13, "link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Add User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17)(22, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 20)(25, "div", 21)(26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 23)(29, "div", 24)(30, "div", 25)(31, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_0_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.user.fullname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Ex: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "John Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Jane Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 25)(44, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_0_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.user.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 25)(50, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_0_Template_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.user.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Please confirm this password in the next field.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 25)(58, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Confirm Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_0_Template_input_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.confirmPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 25)(65, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_0_Template_select_ngModelChange_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.user.roleId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AddUserComponent_div_0_option_70_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Specifies the global role and hence permissions of the user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 40)(74, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddUserComponent_div_0_Template_button_click_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " Add User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddUserComponent_div_0_Template_a_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.backClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedMenu", "users-roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.user.email.trim() || !ctx_r0.user.fullname.trim() || !ctx_r0.user.password.trim() || !ctx_r0.user.roleId || ctx_r0.user.password != ctx_r0.confirmPassword);
  }
}
class AddUserComponent {
  constructor(_location, roleService, userService, toastr, router, authService) {
    this._location = _location;
    this.roleService = roleService;
    this.userService = userService;
    this.toastr = toastr;
    this.router = router;
    this.authService = authService;
    this.roles = [];
    this.user = {
      email: '',
      fullname: '',
      password: ''
    };
    this.confirmPassword = '';
  }
  ngOnInit() {
    this.roleService.findAll().subscribe(roles => {
      this.roles = roles;
      console.log(roles);
    });
  }
  backClicked() {
    this._location.back();
  }
  submit() {
    this.userService.create(this.user).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add user success', 'Success');
        this.router.navigateByUrl('/users-roles');
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add user failed', 'Error');
      }
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function AddUserComponent_Factory(t) {
    return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AddUserComponent,
    selectors: [["app-add-user"]],
    decls: 1,
    vars: 1,
    consts: [["style", "display: flex; height: 100%;", 4, "ngIf"], [2, "display", "flex", "height", "100%"], [3, "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["action", "index.php?/admin/users/add", "id", "form", "method", "post"], ["type", "hidden", "name", "_token", "value", "uHSABemLRpgzKlfkCYev"], [1, "tabs"], [1, "tab-header"], [1, "current", "tab1"], [1, "tab-body", "tab-frame"], [1, "tab", "tab1", "dirty-trackable"], [1, "form-group"], ["for", "name"], [1, "form-required"], ["type", "text", "name", "name", "id", "name", "maxlength", "250", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-description"], ["for", "email"], ["autocomplete", "off", "type", "text", "name", "email", "id", "email", "maxlength", "250", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "autocomplete", "new-password", "name", "password", "id", "password", "maxlength", "250", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "confirm"], ["type", "password", "autocomplete", "off", "name", "confirm", "id", "confirm", "maxlength", "250", 1, "form-control", "fo", 3, "ngModel", "ngModelChange"], [1, "form-separator"], ["for", "role_id"], ["name", "role_id", "id", "role_id", 1, "form-control", "form-control-small", "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "button-group", "form-buttons"], ["type", "button", "id", "accept", 1, "button", "button-left", "button-positive", "button-ok", 3, "disabled", "click"], [1, "button", "button-left", "button-negative", "button-cancel", 3, "click"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [3, "value"]],
    template: function AddUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddUserComponent_div_0_Template, 81, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_USER"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_4__.NewMenuComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/add-project/manage-user-roles/add-user/add-user.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L2FkZC1wcm9qZWN0L21hbmFnZS11c2VyLXJvbGVzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3498:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project/add-project/manage-user-roles/manage-user-roles.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUserRolesComponent": () => (/* binding */ ManageUserRolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/role.service */ 6888);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/new-menu/new-menu.component */ 9356);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);











function ManageUserRolesComponent_div_0_div_26_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageUserRolesComponent_div_0_div_26_li_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const role_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.changeRole(role_r5.roleId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](role_r5.roleName);
  }
}
const _c0 = function (a0, a1) {
  return {
    "top": a0,
    "left": a1,
    "width": "175px",
    "display": "block",
    "position": "absolute"
  };
};
function ManageUserRolesComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 138)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManageUserRolesComponent_div_0_div_26_li_2_Template, 3, 1, "li", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c0, ctx_r1.top, ctx_r1.left));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.rolesArray);
  }
}
function ManageUserRolesComponent_div_0_div_35_tr_24_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageUserRolesComponent_div_0_div_35_tr_24_a_9_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.openDropDown($event, user_r10.userId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 166)(2, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", user_r10.roleName, " ");
  }
}
function ManageUserRolesComponent_div_0_div_35_tr_24_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", user_r10.roleName, " ");
  }
}
function ManageUserRolesComponent_div_0_div_35_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 158)(1, "td")(2, "a", 159)(3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 161)(6, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManageUserRolesComponent_div_0_div_35_tr_24_a_9_Template, 4, 1, "a", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ManageUserRolesComponent_div_0_div_35_tr_24_a_10_Template, 2, 1, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r10.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.isActive("EDIT_USER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.isActive("EDIT_USER"));
  }
}
function ManageUserRolesComponent_div_0_div_35_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 169)(1, "a", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Add User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ManageUserRolesComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 141)(1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 144)(4, "table", 145)(5, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "col", 146)(7, "col", 147)(8, "col", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "tbody")(10, "tr", 149)(11, "th")(12, "a", 150)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th")(16, "a", 151)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th")(20, "a", 152)(21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ManageUserRolesComponent_div_0_div_35_tr_24_Template, 11, 4, "tr", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 87)(26, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ManageUserRolesComponent_div_0_div_35_div_30_Template, 3, 0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.usersArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isActive("ADD_USER"));
  }
}
function ManageUserRolesComponent_div_0_div_36_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a")(3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "td", 173)(6, "td", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](role_r19.roleName);
  }
}
function ManageUserRolesComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 171)(1, "table", 172)(2, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "col")(4, "col", 173)(5, "col", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tbody")(7, "tr", 149)(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "th")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ManageUserRolesComponent_div_0_div_36_tr_12_Template, 7, 1, "tr", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.rolesArray);
  }
}
function ManageUserRolesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-new-menu", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "link", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8)(12, "link", 9)(13, "link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Users & Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17)(22, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ManageUserRolesComponent_div_0_div_26_Template, 3, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 22)(29, "div", 23)(30, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageUserRolesComponent_div_0_Template_a_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.switchTab("user"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageUserRolesComponent_div_0_Template_a_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.switchTab("role"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ManageUserRolesComponent_div_0_div_35_Template, 31, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ManageUserRolesComponent_div_0_div_36_Template, 13, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 30)(39, "div", 31)(40, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " No test case selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " You can select a different group or change the filters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 34)(45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 43)(55, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 45)(58, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 43)(63, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 47)(68, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 43)(73, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "div", 50)(79, "div", 51)(80, "div", 52)(81, "div", 53)(82, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 55)(84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "p", 56)(88, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 58)(90, "div", 59)(91, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 43)(97, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, " OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](99, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 66)(103, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "p", 56)(107, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 69)(111, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "Please enter your full name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](115, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 73)(117, "div", 59)(118, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "span", 60)(120, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 43)(122, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](127, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "form", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](129, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](131, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 69)(133, "div", 76)(134, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](135, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, " Remove for this Session ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 76)(138, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](139, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, " Remove forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](142, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 80)(146, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](149, "p", 56)(150, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 58)(152, "div", 59)(153, "label")(154, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "Don\u2019t show me this again");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](156, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 43)(158, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "div", 83)(163, "div", 84)(164, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "1/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, " Create a Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "div", 86)(168, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "Welcome! Start by creating your first project. Projects in Test Management System usually represent a product or software project and serve as organizational unit for cases, results and milestones. You can create as many projects as you like.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](170, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 89)(172, "div", 84)(173, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "2/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, " Add Test Cases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 86)(177, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Test cases represent a certain feature, behavior or functionality you wish to test. They often contain a description, a list of steps and expected results. Cases are organized in sections to make it easy to group related cases together.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](179, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "div", 91)(181, "div", 84)(182, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "3/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, " Start a Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "div", 86)(186, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "To execute tests and enter results for your cases, you start a test run. You can have multiple test runs over time and reuse your test cases across runs. A test run has a status and you can easily follow its progress and test activity.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](188, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "div", 93)(190, "div", 84)(191, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](192, "4/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, " Add Test Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "div", 86)(195, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](196, "Once you've added a test run, you can start testing and record results. A result has a status such as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](198, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](202, " and the statuses are signaled by different colors. Adding results contributes to the overall status and progress of the test run.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](203, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "div", 95)(205, "div", 84)(206, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207, "5/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, " Invite Team Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "div", 86)(210, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](211, "Test Management System is especially useful when used with a team. Invite other team members and build your test case repository, assign test runs and record results together. Easily track the workload and progress from the Todo tab for your entire team.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](212, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](213, "div", 97)(214, "div", 84)(215, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, "6/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](217, " Set up Integration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](218, "div", 86)(219, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "Integrate Test Management System with your issue/bug tracker (such as JIRA, Redmine & more), requirement tool and test automation. Start by configuring your issue integration to collaborate with your dev team, run coverage reports and link issues to results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](221, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "div", 99)(223, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](224, " I don't plan to integrate Test Management System with other tools for now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](225, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](226, "div", 101)(227, "div", 102)(228, "span", 103)(229, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](230, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](231, "div", 106)(232, "ol", 107)(233, "li", 108)(234, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](235, "Create a project");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](236, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](237, "li", 108)(238, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](239, "Add cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](240, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](241, "li", 108)(242, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](243, "Start a run");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](244, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](245, "li", 113)(246, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](247, "Add results");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](248, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](249, "li", 108)(250, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](251, "Invite users");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](252, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](253, "li", 113)(254, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](255, "Set up integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](256, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](257, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](258, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](259, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](260, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](261, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](262, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](263, "map", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](264, "area", 124)(265, "area", 125)(266, "area", 126)(267, "area", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](268, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](269, "div", 129)(270, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](271, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](272, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](273, " attachment_truncated_name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](274, "img", 133)(275, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](276, "div", 135)(277, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](278, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](279, "div", 83)(280, "div", 84)(281, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](282, "1/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](283, " Create a Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](284, "div", 86)(285, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](286, "Welcome! Start by creating your first project. Projects in Test Management System usually represent a product or software project and serve as organizational unit for cases, results and milestones. You can create as many projects as you like.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](287, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](288, "div", 89)(289, "div", 84)(290, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](291, "2/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](292, " Add Test Cases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](293, "div", 86)(294, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](295, "Test cases represent a certain feature, behavior or functionality you wish to test. They often contain a description, a list of steps and expected results. Cases are organized in sections to make it easy to group related cases together.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](296, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](297, "div", 91)(298, "div", 84)(299, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](300, "3/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](301, " Start a Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](302, "div", 86)(303, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](304, "To execute tests and enter results for your cases, you start a test run. You can have multiple test runs over time and reuse your test cases across runs. A test run has a status and you can easily follow its progress and test activity.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](305, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](306, "div", 93)(307, "div", 84)(308, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](309, "4/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](310, " Add Test Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](311, "div", 86)(312, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](313, "Once you've added a test run, you can start testing and record results. A result has a status such as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](314, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](315, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](316, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](317, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](318, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](319, " and the statuses are signaled by different colors. Adding results contributes to the overall status and progress of the test run.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](320, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](321, "div", 95)(322, "div", 84)(323, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](324, "5/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](325, " Invite Team Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](326, "div", 86)(327, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](328, "Test Management System is especially useful when used with a team. Invite other team members and build your test case repository, assign test runs and record results together. Easily track the workload and progress from the Todo tab for your entire team.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](329, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](330, "div", 97)(331, "div", 84)(332, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](333, "6/6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](334, " Set up Integration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](335, "div", 86)(336, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](337, "Integrate Test Management System with your issue/bug tracker (such as JIRA, Redmine & more), requirement tool and test automation. Start by configuring your issue integration to collaborate with your dev team, run coverage reports and link issues to results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](338, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](339, "div", 99)(340, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](341, " I don't plan to integrate Test Management System with other tools for now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](342, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](343, "div", 101)(344, "div", 102)(345, "span", 103)(346, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](347, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](348, "div", 106)(349, "ol", 107)(350, "li", 108)(351, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](352, "Create a project");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](353, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](354, "li", 108)(355, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](356, "Add cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](357, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](358, "li", 108)(359, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](360, "Start a run");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](361, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](362, "li", 113)(363, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](364, "Add results");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](365, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](366, "li", 108)(367, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](368, "Invite users");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](369, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](370, "li", 113)(371, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](372, "Set up integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](373, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](374, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](375, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](376, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](377, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](378, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](379, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](380, "map", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](381, "area", 124)(382, "area", 125)(383, "area", 126)(384, "area", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedMenu", "users-roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.top && ctx_r0.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r0.displayTab == "user" ? "current" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r0.displayTab == "role" ? "current" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.displayTab == "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.displayTab == "role");
  }
}
class ManageUserRolesComponent {
  constructor(userService, roleService, toastr, router, authService) {
    this.userService = userService;
    this.roleService = roleService;
    this.toastr = toastr;
    this.router = router;
    this.authService = authService;
    this.usersArray = [];
    this.userId = '';
    this.rolesArray = [];
    this.displayTab = 'user';
    this.top = '';
    this.left = '';
    this.user = {
      roleId: undefined,
      userId: undefined
    };
  }
  ngOnInit() {
    this.refresh();
    document.addEventListener('click', e => {
      this.eventDropdown(e);
    });
  }
  refresh() {
    this.userService.getUsers().subscribe(usersRes => {
      this.roleService.findAll().subscribe(rolesRes => {
        console.log(rolesRes);
        this.rolesArray = [...rolesRes];
        let mapRoleId = new Map(rolesRes.map(i => [i.roleId, i]));
        // remove user have undefined role
        this.usersArray = usersRes.filter(x => x.roleId && mapRoleId.has(x.roleId));
        this.usersArray = this.usersArray.map(a => {
          return {
            ...a,
            roleName: rolesRes.find(b => {
              return b.roleId == a.roleId;
            })?.roleName
          };
        });
      });
    });
  }
  ngOnDestroy() {
    document.removeEventListener('click', e => {
      this.eventDropdown(e);
    });
  }
  eventDropdown(e) {
    if (e.target instanceof Element) {
      if (!e.target.className.startsWith('custom-dropdown')) {
        this.top = '';
        this.left = '';
      }
    }
  }
  switchTab(tab) {
    this.displayTab = tab == 'user' ? tab : 'role';
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  changeRole(changeTo) {
    this.user.roleId = changeTo;
    this.userService.update(this.user).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Update user role success', 'Success');
        this.router.navigateByUrl('/users-roles');
        this.refresh();
      },
      error: e => {
        console.log(e);
        this.toastr.error('Update user role failed', 'Error');
      }
    });
  }
  openDropDown(e, userId) {
    this.user.userId = userId;
    var target = e.target || e.srcElement || e.currentTarget;
    console.log(target.getBoundingClientRect());
    this.left = target.getBoundingClientRect()['x'] + 5 + 'px';
    this.top = target.getBoundingClientRect()['y'] + 21 + 'px';
    console.log(this.user.userId);
  }
  static #_ = this.ɵfac = function ManageUserRolesComponent_Factory(t) {
    return new (t || ManageUserRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ManageUserRolesComponent,
    selectors: [["app-manage-user-roles"]],
    decls: 1,
    vars: 1,
    consts: [["style", "display: flex; height: 100%;", 4, "ngIf"], [2, "display", "flex", "height", "100%"], [3, "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["id", "active", 1, "hidden"], ["id", "inactive", 1, "hidden"], ["id", "roleDropdown", "class", "dropdown dropdown-menu roleDropdown", "style", "width: 125px", 3, "ngStyle", 4, "ngIf"], ["type", "hidden", "name", "tab", "id", "tab"], [1, "tabs", "tabs-users"], [1, "tab-header"], [1, "tab1", 3, "click"], [1, "tab3", 3, "click"], ["id", "users-tab-frame", 1, "tab-body", "tab-frame"], ["class", "tab tab1 ", 4, "ngIf"], ["class", "tab tab3", 4, "ngIf"], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], ["id", "messageDialog", 1, "dialog", 2, "width", "350px", "word-wrap", "break-word"], [1, "dialog-title"], [1, "dialog-body"], [1, "dialog-message", 2, "margin", "0"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-ok", "button-left", "button-positive", "dialog-action-default"], ["id", "confirmDialog", 1, "dialog", 2, "width", "350px"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close"], ["id", "confirmDialogOkCancel", 1, "dialog"], [1, "dialog-message"], ["id", "tooltip", 1, "tooltip"], [1, "tooltip-pointer-up"], [1, "tooltip-pointer-down"], [1, "tooltip-pointer-right"], [1, "tooltip-header"], [2, "margin", "0"], ["id", "deleteDialog", 1, "dialog", 2, "width", "425px"], [1, "top", "bottom", "dialog-message"], [1, "dialog-extra", "text-delete"], [1, "message", "message-delete", "bottom", "delete-confirm-container", 2, "margin-top", "12px", "line-height", "1"], [1, "checkbox"], [1, "dialog-confirm"], [1, "dialog-confirm-busy"], [1, "icon-progress-inline"], ["type", "checkbox", "value", "1", "name", "deleteCheckbox"], [1, "button", "button-ok", "button-ok-disabled", "button-left", "button-positive", "button-disabled", "dialog-action-default"], [1, "button", "button-left", "button-positive", "button-disabled", "button-hidden", "button-no-margin-right", "dialog-action-secondary"], ["id", "dpaDialog", 1, "dialog", 2, "max-width", "725px"], ["action", "index.php?/admin/users/accept_data_processing_agreement", "id", "dpa_form", "method", "post"], ["type", "hidden", "name", "_token", "value", "iU.KFuAiJ8LuprOCNYor"], [1, "form-group"], ["for", "name"], [1, "form-required"], ["type", "text", "name", "full_name", "id", "full_name", "maxlength", "250", "value", "", 1, "form-control"], [1, "message", "message-delete", "bottom", "delete-confirm-container", 2, "margin-top", "12px", "line-height", "1", "padding-bottom", "50px"], ["id", "trEnterpriseDialog", 1, "dialog", 2, "width", "350px", "word-wrap", "break-word"], ["action", "index.php?/mysettings/tr_enterprise_banner_setting", "id", "tr_enterprise_form", "method", "post"], [1, "radio"], ["type", "radio", "name", "tr_enterprise_banner_display", "value", "0", "checked", "", 1, "radio"], ["type", "radio", "name", "tr_enterprise_banner_display", "value", "1", 1, "radio"], ["type", "submit", "value", "Submit", 1, "button", "button-ok", "button-left", "button-positive", "dialog-action-default"], ["id", "deleteEntityAttachmentDialog", 1, "dialog", 2, "width", "425px"], ["id", "deleteDontShowAgain", "type", "checkbox", "value", "1", "name", "deleteCheckbox"], [1, "button", "button-ok", "button-left", "button-positive", "dialog-action-default", "delete-entity-attachment-button-submit"], ["id", "projectGoalHelp", 1, "tooltip", "tooltip-goal"], [1, "tooltip-goal-title"], [1, "tooltip-goal-step"], [1, "tooltip-goal-body"], [1, "top"], [1, "tooltip-goal-image", "goal-project-help"], ["id", "casesGoalHelp", 1, "tooltip", "tooltip-goal"], [1, "tooltip-goal-image", "goal-cases-help"], ["id", "runGoalHelp", 1, "tooltip", "tooltip-goal"], [1, "tooltip-goal-image", "goal-run-help"], ["id", "resultsGoalHelp", 1, "tooltip", "tooltip-goal"], [1, "tooltip-goal-image", "goal-results-help"], ["id", "usersGoalHelp", 1, "tooltip", "tooltip-goal"], [1, "tooltip-goal-image", "goal-users-help"], ["id", "integrationGoalHelp", 1, "tooltip", "tooltip-goal"], [1, "tooltip-goal-image", "goal-integration-help"], [1, "checkbox", 2, "margin-top", "1em"], ["type", "checkbox", "id", "integrationGoalToggle"], ["id", "goals", 1, "goals"], ["id", "goals-banner", 1, "goals-banner"], ["id", "goals-cancel", 1, "goals-cancel", "hidden"], [1, "link-noline", "nolink"], [1, "icon-cancel"], [1, "goals-banner-inner"], [1, "goals-progress"], [1, "goals-progress-step", "goals-progress-step-done"], [1, "goals-progress-title"], ["tooltip-id", "#projectGoalHelp", "tooltip-position", "top", "tooltip-width", "400", 1, "goals-progress-marker", "link-tooltip", "goal-project-checked"], ["tooltip-id", "#casesGoalHelp", "tooltip-position", "top", "tooltip-width", "400", 1, "goals-progress-marker", "link-tooltip", "goal-cases-checked"], ["tooltip-id", "#runGoalHelp", "tooltip-position", "top", "tooltip-width", "400", 1, "goals-progress-marker", "link-tooltip", "goal-run-checked"], [1, "goals-progress-step"], ["tooltip-id", "#resultsGoalHelp", "tooltip-position", "top", "tooltip-width", "400", 1, "goals-progress-marker", "link-tooltip", "goal-results"], ["tooltip-id", "#usersGoalHelp", "tooltip-position", "top", "tooltip-width", "400", 1, "goals-progress-marker", "link-tooltip", "goal-users-checked"], ["tooltip-id", "#integrationGoalHelp", "tooltip-position", "top", "tooltip-width", "400", 1, "goals-progress-marker", "link-tooltip", "goal-integration"], ["id", "goals-start", 1, "goals-start", "hidden"], [1, "goal-start"], ["id", "goals-finish", 1, "goals-finish", "hidden"], [1, "goal-finish"], ["id", "goals-next", 1, "goals-next", "hidden"], ["src", "https://static.testrail.io/7.5.5.2003/images/layout/blank.gif", "usemap", "#goalsNextMap", 1, "goal-next"], ["name", "goalsNextMap"], ["shape", "rect", "coords", "691,13,726,48"], ["shape", "rect", "coords", "64,305,254,339", "target", "_blank", "routerLink", "http://www.gurock.com/testrail/support"], ["shape", "rect", "coords", "280,305,470,339", "target", "_blank", "routerLink", "http://blog.gurock.com/"], ["shape", "rect", "coords", "496,305,686,339", "target", "_blank", "routerLink", "http://www.gurock.com/testrail/videos/introduction-projects/"], ["id", "attachmentInfoDialog", 1, "dialog", "dialog_attachment", 2, "width", "900px", "height", "531px"], ["id", "newAttachmentTemplate", 2, "display", "none"], ["id", "libraryAttachment-attachment_id", "title", "attachment_name", 1, "attachment-block", "attachment-attachment_icon", "attachment_selected_class", "lazy", 2, "width", "150px", "height", "150px"], [1, "attachment-icon"], [1, "attachment-name"], ["attachment_src_tag", "attachment_imgurl", "attachment_onerror_tag", "attachment_img_onerror", 1, "hidden-image"], [1, "attachment-selection", "attachment_selected_class"], ["id", "libraryAttachmentsAddItemTemplate", 2, "display", "none"], ["id", "element_id", 1, "attachment-library-add"], [1, "attachment-library-add-icon"], ["id", "roleDropdown", 1, "dropdown", "dropdown-menu", "roleDropdown", 2, "width", "125px", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "dropdown-menu-link", 3, "click"], [1, "tab", "tab1"], ["id", "filterUsersBubble", 1, "bubble", "filter-bubble", "hidden"], ["id", "filterUsersContent", 1, "filter-bubble-inner"], ["id", "usersTable"], ["id", "example", 1, "grid"], [1, "width-24"], [1, "width-20"], [1, "width-13"], [1, "header"], ["title", "User", 1, "link-noline"], ["title", "Email Address", 1, "link-noline"], ["title", "Role", 1, "link-noline"], ["class", "even", "id", "user-1", 4, "ngFor", "ngForOf"], [1, "h1-pagination"], ["id", "usersPagination"], ["id", "usersPaginationBusy", 1, "hidden", "pagination-loader"], ["class", "button-group grid-buttons", 4, "ngIf"], ["id", "user-1", 1, "even"], ["routerLink", "index.php?/admin/users/edit/1", 1, "user-name-col"], [1, "name"], [1, "nolink"], [1, "email"], ["class", "dropdownLink", 3, "click", 4, "ngIf"], ["class", "dropdownLink", 4, "ngIf"], [1, "dropdownLink", 3, "click"], [1, "custom-dropdown", "dropdown-icon-black"], [1, "role"], [1, "dropdownLink"], [1, "button-group", "grid-buttons"], ["routerLink", "/user-role/add", 1, "button", "button-left", "button-add"], [1, "tab", "tab3"], [1, "grid"], [1, "action"]],
    template: function ManageUserRolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ManageUserRolesComponent_div_0_Template, 385, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive("LIST_USER_ROLE"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _shared_new_menu_new_menu_component__WEBPACK_IMPORTED_MODULE_4__.NewMenuComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/add-project/manage-user-roles/manage-user-roles.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L2FkZC1wcm9qZWN0L21hbmFnZS11c2VyLXJvbGVzL21hbmFnZS11c2VyLXJvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2107:
/*!******************************************************************************!*\
  !*** ./src/app/components/project/member/add-dialog/add-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDialogComponent": () => (/* binding */ AddDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function AddDialogComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
  }
}
class AddDialogComponent {
  constructor(confirmClose, users) {
    this.confirmClose = confirmClose;
    this.users = users;
    this.userId = 0;
  }
  submit() {
    this.confirmClose.close(this.userId);
  }
  close() {
    this.confirmClose.close(0);
  }
  static #_ = this.ɵfac = function AddDialogComponent_Factory(t) {
    return new (t || AddDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddDialogComponent,
    selectors: [["app-add-dialog"]],
    decls: 18,
    vars: 2,
    consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "ui-dialog-title-confirmDialog", "id", "dialog-ident-confirmDialog", 1, "ui-dialog", 2, "display", "block", "z-index", "1004", "outline", "0px", "height", "auto", "width", "350px", "position", "inherit !important"], [1, "ui-dialog-titlebar", "ui-widget-header", "ui-corner-all", "ui-helper-clearfix"], ["id", "ui-dialog-title-confirmDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "confirmDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "display", "block", "min-height", "0px", "height", "auto"], [1, "dialog-title"], [1, "dialog-body"], [1, "form-control", "form-select", 2, "width", "200px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-ok", "button-left", "button-positive", "dialog-action-default", 3, "click"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close", 3, "click"], [3, "value"]],
    template: function AddDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDialogComponent_Template_span_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDialogComponent_Template_select_ngModelChange_11_listener($event) {
          return ctx.userId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddDialogComponent_option_12_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDialogComponent_Template_a_click_14_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDialogComponent_Template_a_click_16_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3582:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/project/member/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDeleteDialogComponent": () => (/* binding */ ConfirmDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



class ConfirmDeleteDialogComponent {
  constructor(confirmClose, email) {
    this.confirmClose = confirmClose;
    this.email = email;
  }
  submit() {
    this.confirmClose.close('delete');
  }
  close() {
    this.confirmClose.close('cancel');
  }
  static #_ = this.ɵfac = function ConfirmDeleteDialogComponent_Factory(t) {
    return new (t || ConfirmDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmDeleteDialogComponent,
    selectors: [["app-confirm-delete-dialog"]],
    decls: 18,
    vars: 1,
    consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "ui-dialog-title-confirmDialog", "id", "dialog-ident-confirmDialog", 1, "ui-dialog", 2, "display", "block", "z-index", "1004", "outline", "0px", "height", "auto", "width", "350px", "position", "inherit !important"], [1, "ui-dialog-titlebar", "ui-widget-header", "ui-corner-all", "ui-helper-clearfix"], ["id", "ui-dialog-title-confirmDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "confirmDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "display", "block", "min-height", "0px", "height", "auto"], [1, "dialog-title"], [1, "dialog-body"], [1, "dialog-message", 2, "margin", "0"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-ok", "button-left", "button-positive", "dialog-action-default", 3, "click"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close", 3, "click"]],
    template: function ConfirmDeleteDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_span_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_a_click_14_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_a_click_16_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Remove ", ctx.email, " from this project?");
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5695:
/*!***************************************************************!*\
  !*** ./src/app/components/project/member/member.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberComponent": () => (/* binding */ MemberComponent)
/* harmony export */ });
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-dialog/add-dialog.component */ 2107);
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-delete-dialog/confirm-delete-dialog.component */ 3582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/member.service */ 6341);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);












function MemberComponent_tr_42_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MemberComponent_tr_42_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.openDeleteDialog(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MemberComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MemberComponent_tr_42_button_6_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r2.fullname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", user_r2.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isActive("REMOVE_MEMBER"));
  }
}
function MemberComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MemberComponent_div_43_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.openCreateDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Add Member ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class MemberComponent {
  constructor(route, memberService, dialog, toastr, userService, authService) {
    this.route = route;
    this.memberService = memberService;
    this.dialog = dialog;
    this.toastr = toastr;
    this.userService = userService;
    this.authService = authService;
    this.projectId = 0;
    this.projectUsers = [];
    this.users = [];
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      console.log(this.projectId);
      this.refreshProjectUsers(this.projectId);
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
    });
  }
  refreshProjectUsers(projectId) {
    this.memberService.findAllByProjectId(projectId).subscribe(projectUsers => {
      console.log(projectUsers);
      this.projectUsers = projectUsers;
    });
  }
  openDeleteDialog(projectUser) {
    this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDeleteDialogComponent, {
      data: projectUser.email
    }).afterClosed().subscribe(command => {
      if (command === undefined || command === 'cancel' || projectUser.projectUserId === undefined) {
        return;
      }
      if (command === 'delete') {
        this.memberService.delete(projectUser.projectUserId).subscribe({
          next: res => {
            console.log(res);
            if (res.deletedCount == 0) {
              this.toastr.error('User is not available', 'Delete member failed');
            } else {
              this.toastr.success('Delete member success', 'Success');
            }
          },
          error: e => {
            console.log(e);
            this.toastr.error('User is not available', 'Delete member failed');
          },
          complete: () => this.refreshProjectUsers(this.projectId)
        });
      }
    });
  }
  openCreateDialog() {
    let setProjectUserId = new Set(this.projectUsers.map(x => x.userId));
    let unSetUsers = this.users.filter(x => x.userId && !setProjectUserId.has(x.userId));
    this.dialog.open(_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AddDialogComponent, {
      data: unSetUsers
    }).afterClosed().subscribe(userId => {
      if (!userId) {
        return;
      }
      this.memberService.create({
        projectId: this.projectId,
        userId: userId
      }).subscribe({
        next: res => {
          console.log(res);
          this.toastr.success('Add member success', 'Success');
          this.refreshProjectUsers(this.projectId);
        },
        error: e => {
          console.log(e);
          this.toastr.error('Add member failed', 'Error');
          this.refreshProjectUsers(this.projectId);
        }
      });
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function MemberComponent_Factory(t) {
    return new (t || MemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MemberComponent,
    selectors: [["app-member"]],
    decls: 44,
    vars: 4,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], [2, "display", "flex", "flex-direction", "column"], [2, "flex", "1"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["id", "usersTable"], ["id", "example", 1, "grid"], [1, "width-24"], [1, "width-20"], [1, "width-13"], [1, "header"], ["title", "User", 1, "link-noline"], ["title", "Email Address", 1, "link-noline"], ["title", "Role", 1, "link-noline"], [4, "ngFor", "ngForOf"], ["class", "button-group grid-buttons", 4, "ngIf"], ["class", "button button-left button-negative button-cancel save-cancel-button", 3, "click", 4, "ngIf"], [1, "button", "button-left", "button-negative", "button-cancel", "save-cancel-button", 3, "click"], [1, "button-group", "grid-buttons"], [1, "button", "button-left", "button-add", 3, "click"]],
    template: function MemberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "link", 4)(6, "link", 5)(7, "link", 6)(8, "link", 7)(9, "link", 8)(10, "link", 9)(11, "link", 10)(12, "link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 18)(21, "div", 19)(22, "table", 20)(23, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "col", 21)(25, "col", 22)(26, "col", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "tbody")(28, "tr", 24)(29, "th")(30, "a", 25)(31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th")(34, "a", 26)(35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "th")(38, "a", 27)(39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, MemberComponent_tr_42_Template, 7, 3, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, MemberComponent_div_43_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("projectId", ctx.projectId + "")("selectedMenu", "members");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.projectUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_MEMBER"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_5__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 850:
/*!****************************************************************************************!*\
  !*** ./src/app/components/project/milestones/add-milestone/add-milestone.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMilestoneComponent": () => (/* binding */ AddMilestoneComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mode */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-date-picker */ 7501);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);











function AddMilestoneComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddMilestoneComponent_div_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("M", ctx_r2.milestone.milestoneId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.milestone.milestoneName, " ");
  }
}
function AddMilestoneComponent_div_0_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMilestoneComponent_div_0_button_73_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.update());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Save Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.milestone.milestoneName.trim().length == 0 || !ctx_r5.milestone.projectId);
  }
}
function AddMilestoneComponent_div_0_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMilestoneComponent_div_0_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r6.milestone.milestoneName.trim().length == 0 || !ctx_r6.milestone.projectId);
  }
}
const _c0 = function (a1, a2) {
  return {
    format: "YYYY-MM-DD",
    min: a1,
    max: a2
  };
};
function AddMilestoneComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "app-new-menu-project", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("getProject", function AddMilestoneComponent_div_0_Template_app_new_menu_project_getProject_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.project = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "link", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8)(12, "link", 9)(13, "link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddMilestoneComponent_div_0_div_18_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddMilestoneComponent_div_0_ng_template_19_Template, 4, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 17)(21, "form", 18)(22, "div", 19)(23, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddMilestoneComponent_div_0_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.milestone.milestoneName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Ex: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Version 1.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Internal Beta 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Sprint #4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 25)(40, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28)(44, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddMilestoneComponent_div_0_Template_textarea_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.milestone.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Use this description to describe the purpose and goals of this milestone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 25)(50, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddMilestoneComponent_div_0_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.milestone.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "The expected or scheduled start date of this milestone (for upcoming and not yet active milestones).");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 25)(57, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddMilestoneComponent_div_0_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.milestone.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "The expected due or end date of this milestone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 25)(65, "div", 36)(66, "label")(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "This milestone is completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddMilestoneComponent_div_0_Template_input_change_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.milestone.isCompleted = !ctx_r17.milestone.isCompleted);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Tests and test cases can only be assigned to active milestones.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, AddMilestoneComponent_div_0_button_73_Template, 2, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, AddMilestoneComponent_div_0_button_74_Template, 2, 1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMilestoneComponent_div_0_Template_a_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 43)(79, "div", 44)(80, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " No test case selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " You can select a different group or change the filters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 47)(85, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "div", 50)(88, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](53);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("projectId", ctx_r0.milestone.projectId + "")("selectedMenu", "milestone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Create);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Update);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.milestone.milestoneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.milestone.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.milestone.startDate)("dpDayPicker", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c0, ctx_r0.getProjectStartDate(), ctx_r0.findMaxDate(_r4.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.milestone.endDate)("dpDayPicker", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c0, ctx_r0.findMinDate(_r3.value), ctx_r0.getProjectEndDate()));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r0.milestone.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Update && ctx_r0.isActive("EDIT_MILESTONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Create && ctx_r0.isActive("ADD_MILESTONE"));
  }
}
class AddMilestoneComponent {
  constructor(milestoneService, router, toastr, location, route, authService) {
    this.milestoneService = milestoneService;
    this.router = router;
    this.toastr = toastr;
    this.location = location;
    this.route = route;
    this.authService = authService;
    this.milestone = {
      projectId: 0,
      milestoneName: '',
      isCompleted: false
    };
    this.currentMode = src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create;
    this.Mode = src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode;
  }
  ngOnInit() {
    this.currentMode = this.router.url.startsWith('/milestones-edit/') ? src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Update : src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create;
    console.log('Current mode: ' + this.currentMode);
    this.route.params.subscribe(params => {
      switch (this.currentMode) {
        case src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create:
          console.log(params);
          this.milestone.projectId = params['id'];
          break;
        case src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Update:
          this.milestoneService.findByMilestoneId(params['id']).subscribe(milestone => {
            if (milestone.endDate instanceof Array) {
              milestone.endDate = milestone.endDate[0] + "-" + String(milestone.endDate[1]).padStart(2, '0') + "-" + String(milestone.endDate[2]).padStart(2, '0');
            }
            if (milestone.startDate instanceof Array) {
              milestone.startDate = milestone.startDate[0] + "-" + String(milestone.startDate[1]).padStart(2, '0') + "-" + String(milestone.startDate[2]).padStart(2, '0');
            }
            this.milestone = milestone;
          });
          break;
        default:
          break;
      }
    });
  }
  cancel() {
    this.location.back();
  }
  submit() {
    this.milestoneService.addMilestone(this.milestone).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add milestone success', 'Success');
        this.router.navigateByUrl('/milestones/' + this.milestone.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add milestone failed', 'Error');
      }
    });
  }
  update() {
    this.milestoneService.update(this.milestone).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Update test case success', 'Success');
        this.router.navigateByUrl('/milestones/' + this.milestone.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Update test case failed', 'Error');
      }
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  findMaxDate(milestoneEndDate) {
    let projectEndDate = this.project?.endDate;
    if (!projectEndDate) {
      return milestoneEndDate;
    }
    if (projectEndDate instanceof Array) {
      projectEndDate = projectEndDate[0] + "-" + String(projectEndDate[1]).padStart(2, '0') + "-" + String(projectEndDate[2]).padStart(2, '0');
    }
    if (!milestoneEndDate) {
      return projectEndDate;
    }
    return new Date(projectEndDate) < new Date(milestoneEndDate) ? projectEndDate : milestoneEndDate;
  }
  findMinDate(milestoneStartDate) {
    let projectStartDate = this.project?.startDate;
    if (!projectStartDate) {
      return milestoneStartDate;
    }
    if (projectStartDate instanceof Array) {
      projectStartDate = projectStartDate[0] + "-" + String(projectStartDate[1]).padStart(2, '0') + "-" + String(projectStartDate[2]).padStart(2, '0');
    }
    if (!milestoneStartDate) {
      return projectStartDate;
    }
    return new Date(projectStartDate) > new Date(milestoneStartDate) ? projectStartDate : milestoneStartDate;
  }
  getProjectStartDate() {
    let projectStartDate = this.project?.startDate;
    if (projectStartDate instanceof Array) {
      projectStartDate = projectStartDate[0] + "-" + String(projectStartDate[1]).padStart(2, '0') + "-" + String(projectStartDate[2]).padStart(2, '0');
    }
    return projectStartDate;
  }
  getProjectEndDate() {
    let projectEndDate = this.project?.endDate;
    if (projectEndDate instanceof Array) {
      projectEndDate = projectEndDate[0] + "-" + String(projectEndDate[1]).padStart(2, '0') + "-" + String(projectEndDate[2]).padStart(2, '0');
    }
    return projectEndDate;
  }
  static #_ = this.ɵfac = function AddMilestoneComponent_Factory(t) {
    return new (t || AddMilestoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__.MilestoneService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AddMilestoneComponent,
    selectors: [["app-add-milestone"]],
    decls: 1,
    vars: 1,
    consts: [["style", "display: flex; height: 100%;", 4, "ngIf"], [2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu", "getProject"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], ["class", "content-header-title page_title", 4, "ngIf"], [3, "ngIf"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["action", "index.php?/milestones-add/2/1", "id", "form", "method", "post"], [1, "form-group", "form-group-main"], ["for", "name"], [1, "form-required"], ["type", "text", "name", "name", "id", "name", "maxlength", "250", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-description"], [1, "form-separator"], [1, "form-group"], ["for", "description"], [1, "form-toolbar", 2, "padding-top", "0px"], [1, "textarea-resizable"], ["rows", "6", "name", "description", "id", "description", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "ngModel", "ngModelChange"], [1, "textarea-grippie"], ["for", "due_on"], ["name", "startDate", 1, "form-control", "form-control-small", "dirty-trackable-datepicker", "hasDatepicker", 3, "ngModel", "dpDayPicker", "ngModelChange"], ["startDate", ""], ["name", "endDate", 1, "form-control", "form-control-small", "dirty-trackable-datepicker", "hasDatepicker", 3, "ngModel", "dpDayPicker", "ngModelChange"], ["endDate", ""], [1, "checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "button-group", "form-buttons"], ["type", "button", "class", "button button-left button-positive button-ok", 3, "disabled", "click", 4, "ngIf"], ["class", "button button-left button-positive button-ok", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "button", "button-left", "button-negative", "button-cancel", "milestone-form-cancel", 3, "click"], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [1, "content-header-title", "page_title"], [1, "content-header-id"], ["type", "button", 1, "button", "button-left", "button-positive", "button-ok", 3, "disabled", "click"]],
    template: function AddMilestoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddMilestoneComponent_div_0_Template, 89, 19, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_MILESTONE") || ctx.isActive("EDIT_MILESTONE"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__.DatePickerDirective, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/milestones/add-milestone/add-milestone.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L21pbGVzdG9uZXMvYWRkLW1pbGVzdG9uZS9hZGQtbWlsZXN0b25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3139:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/project/milestones/detail-milestone/detail-milestone.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailMilestoneComponent": () => (/* binding */ DetailMilestoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);











const _c0 = ["statusDropdown"];
const _c1 = ["button"];
const _c2 = function (a1, a3) {
  return ["/test-runs", a1, "detail", a3];
};
function DetailMilestoneComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 122)(3, "div", 123)(4, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const incompelete_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "run-", incompelete_r4.runId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c2, ctx_r0.projectId, incompelete_r4.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](incompelete_r4.runName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" By ", incompelete_r4.fullname, " on ", incompelete_r4.createdOn, " ");
  }
}
function DetailMilestoneComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 127)(1, "td")(2, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 128)(5, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](3, _c2, ctx_r1.projectId, entry_r5.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r5.runName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r5.completedOn ? entry_r5.completedOn[2] + "/" + entry_r5.completedOn[1] + "/" + entry_r5.completedOn[0] : "");
  }
}
const _c3 = function (a1) {
  return ["/milestones-add", a1];
};
function DetailMilestoneComponent_a_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 130)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c3, ctx_r2.projectId));
  }
}
function DetailMilestoneComponent_div_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 69)(1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 132)(4, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailMilestoneComponent_div_167_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Complete this milestone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
class DetailMilestoneComponent {
  constructor(dialog, route, testRunService, milestoneService, router, toastr, authService) {
    this.dialog = dialog;
    this.route = route;
    this.testRunService = testRunService;
    this.milestoneService = milestoneService;
    this.router = router;
    this.toastr = toastr;
    this.authService = authService;
    this.projectId = '';
    this.milestoneId = '';
    this.milestoneName = '';
    this.dueDate = '';
    this.isCompleted = false;
    this.results = [];
    this.top = '';
    this.left = '';
    this.incompleteTestRuns = [];
    this.completedTestRuns = [];
    this.milestone = {
      projectId: 0,
      milestoneName: '',
      isCompleted: false
    };
    this.isMenuOpen = false;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      this.milestoneId = params['subId'];
      console.log(this.projectId);
      console.log(this.milestoneId);
      this.refreshTestrun(parseInt(this.milestoneId));
      this.milestoneService.findByMilestoneId(parseInt(this.milestoneId)).subscribe(results => {
        this.milestone = results;
        this.milestoneName = results.milestoneName;
        this.isCompleted = results.isCompleted ? results.isCompleted : false;
        this.dueDate = results.endDate ? results.endDate[2] + '/' + results.endDate[1] + '/' + results.endDate[0] : '';
      });
    });
  }
  refreshTestrun(testRunId) {
    this.testRunService.findAllByMilestoneId(testRunId).subscribe(testRuns => {
      this.results = testRuns;
      for (const testRun of testRuns) {
        if (testRun.isCompleted) {
          this.completedTestRuns.push(testRun);
        } else {
          if (testRun.createdOn instanceof Array) {
            testRun.createdOn = testRun.createdOn[2] + '/' + testRun.createdOn[1] + '/' + testRun.createdOn[0];
          }
          this.incompleteTestRuns.push(testRun);
        }
      }
    });
  }
  openDropDown(e) {
    var target = e.target || e.srcElement || e.currentTarget;
    console.log(target.getBoundingClientRect());
    this.left = target.getBoundingClientRect()['x'] + 'px';
    this.top = target.getBoundingClientRect()['y'] + 24 + 'px';
    console.log(this.isMenuOpen);
    console.log(this.top);
    console.log(this.left);
  }
  close() {
    this.milestone.isCompleted = true;
    this.milestoneService.update(this.milestone).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Update milestone success', 'Success');
        this.router.navigateByUrl('/milestones/' + this.milestone.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Update milestone failed', 'Error');
      }
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function DetailMilestoneComponent_Factory(t) {
    return new (t || DetailMilestoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_0__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__.MilestoneService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DetailMilestoneComponent,
    selectors: [["app-detail-milestone"]],
    viewQuery: function DetailMilestoneComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.statusDropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
      }
    },
    decls: 180,
    vars: 9,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "notificationbar", 1, "notificationbar", "notificationbar-hidden"], [1, "notificationbar", "notificationbar-local"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-id"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner"], ["id", "drilldown_container"], ["id", "content_container"], ["id", "submilestones-upcoming"], ["id", "submilestones-completed"], ["id", "runs-958655204"], ["id", "mile_heading", 1, ""], ["id", "delete-run", 1, "delete-selected-link"], ["href", "javascript:void(0)", "onclick", "App.Runs.BulkRunDelete(this);"], [1, "button", "button-negative", "button-delete"], [2, "margin-top", "1.2em"], [1, "table"], ["class", "row flex-runs-row hoverSensitive", 3, "id", 4, "ngFor", "ngForOf"], ["id", "completed"], [2, "margin-top", "0.3em"], [1, "run-grid", "grid"], ["class", "odd hoverSensitive", 4, "ngFor", "ngForOf"], ["id", "filterTestsBubble", 1, "bubble", "filter-bubble", "hidden"], ["id", "filterTestsContent", 1, "filter-bubble-inner"], ["id", "referenceBubble", 1, "bubble", "integration-bubble"], [1, "integration-bubble-busy", "busy"], ["title", "Loading...", 1, "icon-progress-large"], [1, "error"], [1, "integration-bubble-error-header"], ["id", "referenceBubbleError", 1, "integration-bubble-error-body"], [1, "content"], ["id", "bulkDeleteDialog", 1, "dialog", "bulk-delete-dialog"], [1, "dialog-title"], [1, "dialog-body"], [1, "top", "bottom", "dialog-message"], [1, "dialog-extra", "text-delete"], [1, "message", "message-delete", "bottom", "delete-confirm-container", "confirm-container"], [1, "checkbox"], [1, "dialog-confirm"], [2, "color", "red"], [1, "dialog-confirm-busy"], ["id", "confirm-check", "type", "checkbox", "value", "1", "name", "deleteCheckbox"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-black", "button-black-disabled", "button-left", "button-positive", "button-disabled", "dialog-action-default"], [1, "button", "button-left", "button-delete", "button-disabled", "button-hidden", "button-no-margin-right", "dialog-action-secondary"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close"], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], [1, "sidebar-inner"], [1, "top", "bottom"], [1, "sidebar-menu"], [1, "sidebar-menu-item", "sidebar-menu-item-first", "sidebar-menu-item-selected"], ["id", "navigation-milestones-status"], ["id", "attachmentNewDialogFile", 1, "attachments-new-dialog", "dialog", "dialog_attachment"], [1, "addAttachment"], ["id", "filterAttachmentsBubble", 1, "attachments-filter", "bubble", "filter-bubble", "hidden"], ["id", "filterAttachmentsContent", 1, "filter-bubble-inner"], ["id", "newAttachments", "type", "hidden"], ["id", "projectId", "type", "hidden", "value", ""], [1, "attachments-library", "attachment-library-dialog"], [2, "float", "left"], [1, "attachment-library-title"], ["id", "libraryAddAttachment", 1, "button", "button-left", "button-add"], ["id", "libraryDeleteAttachment", "href", "javascript:void(0)", "onclick", "this.blur(); App.Dialogs.remove('This action <strong>deletes selected attachment/s and all their instances across your projects</strong> (except those on closed Test Runs & Plans) permanently. This cannot be undone. Do you wish to continue?', null, null, null, function() { App.Attachments.removeAttachments(); });; return false;", 1, "button", "button-left", "button-negative", "button-delete", 2, "display", "none"], [2, "float", "right"], [1, "h1-additional"], ["id", "attachments-library-sortby", "href", "#sortDropdown", 1, "link", "link-dashed", "dropdownLink"], ["id", "attachmentsByName"], ["id", "orderByAsc", 1, "hidden"], [1, "icon-asc"], ["id", "orderByDesc", 1, ""], [1, "icon-desc"], ["href", "javascript:void(0)", "onclick", "this.blur(); App.Attachments.filterAttachments(event); return false;", "id", "attachmentFilterByChange", 1, "link", "link-dashed"], ["id", "attachmentFilterByEmpty", 1, ""], ["id", "attachmentFilterByInfo", 1, "hidden", "toolbar-highlighted"], ["id", "attachmentFilterByBusy", 1, "busy"], [1, "icon-progress-inline"], ["id", "attachmentFilterByReset", 1, "hidden"], ["href", "javascript:void(0)", "onclick", "this.blur(); App.Attachments.filterReset(); return false;", "tooltip-text", "Reset filters", 1, "link-tooltip"], [1, "icon-orderreset"], ["type", "text", "name", "search", "id", "libraryAttachmentsSearch", 1, "attachment-library-search"], ["id", "sortDropdown", 1, "dropdown", "dropdown-menu", "sortDropdown", 2, "position", "fixed", "width", "100px"], ["href", "javascript:void(0)", "onclick", "this.blur(); App.Attachments.sortAttachments('created_on'); return false;", 1, "dropdown-menu-link"], ["href", "javascript:void(0)", "onclick", "this.blur(); App.Attachments.sortAttachments('name'); return false;", 1, "dropdown-menu-link"], ["href", "javascript:void(0)", "onclick", "this.blur(); App.Attachments.sortAttachments('size'); return false;", 1, "dropdown-menu-link"], ["id", "attachmentsNewList", 2, "margin-top", "40px", "clear", "both", "background-color", "white", "height", "361px", "overflow-y", "auto"], ["id", "attachmentsPagination", 2, "margin-bottom", "10px"], ["id", "attachmentNewButtons", 1, "dialog-buttons-highlighted", "button-group"], [2, "margin-top", "6px", "float", "left"], ["id", "attachmentNewSubmit", "type", "submit", 1, "button", "button-right", "button-positive", "button-ok", 2, "margin-left", "7px"], [1, "button", "button-right", "button-negative", "button-cancel", "dialog-action-close"], ["id", "navigation-milestones-add", "class", "sidebar-button", 3, "routerLink", 4, "ngIf"], ["class", "sidebar-inner", 4, "ngIf"], ["id", "startMilestoneDialog", 1, "dialog", 2, "width", "450px"], ["id", "startMilestoneForm", 1, "dialogFormDefault"], ["id", "startMilestoneErrors", 1, "message", "message-error", "validationError"], ["id", "startMilestoneControls"], ["id", "startMilestoneSubmit", "type", "submit", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default"], [1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close"], [1, "row", "flex-runs-row", "hoverSensitive", 3, "id"], [1, "column", "summary-column", "summary-column-icon-compact", "flex-runs-1-medium", "icon-plan-32", "summary-column-first"], [1, "column", "summary-column", "flex-runs-2-medium", "summary-column-first"], [1, "summary-title", "summary-title-compact", "text-ppp"], [3, "routerLink"], [1, "hidden", "hoverAction"], [1, "summary-description-compact", "text-secondary", "text-ppp"], [1, "odd", "hoverSensitive"], [1, "sub", "right"], [1, "text-soft"], ["id", "navigation-milestones-add", 1, "sidebar-button", 3, "routerLink"], [1, "sidebar-h1", "top"], [1, "sidebar-action"], ["type", "button", 1, "button", "button-close", 2, "padding", "0 8px 0 8px", 3, "click"]],
    template: function DetailMilestoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "div", 21)(28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 23)(30, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Test Runs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 25)(33, "a", 26)(34, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Delete selected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 28)(37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, DetailMilestoneComponent_div_38_Template, 9, 8, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 31)(40, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, DetailMilestoneComponent_tr_43_Template, 7, 6, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 37)(47, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 40)(50, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " An Error Occurred ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 44)(57, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 46)(60, "p", 47)(61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Delete these test milestones?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " This also unlinks the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " milestones from all test runs and plans and cannot be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "undone (no test runs and plans are deleted). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 49)(70, "div", 50)(71, "label")(72, "span", 51)(73, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Yes, delete the selected milestones (cannot be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "undone)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "span", 53)(78, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 55)(80, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 60)(87, "div", 61)(88, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, " No test case selected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " You can select a different group or change the filters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 64)(93, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 68)(97, "div", 69)(98, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 71)(101, "ul")(102, "li", 72)(103, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, " Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 74)(106, "div", 45)(107, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Attach file");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "input", 78)(112, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 80)(114, "div")(115, "div", 81)(116, "strong", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Media Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 85)(123, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, " Sort: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "a", 87)(126, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, " \u00A0|\u00A0 Filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "a", 93)(134, "span", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](138, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "span", 98)(140, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](141, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 102)(144, "ul")(145, "li")(146, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "li")(149, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "li")(152, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "div", 106)(155, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 108)(157, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Maximum file size: 256 MB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "button", 110)(160, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "Attach");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](164, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](166, DetailMilestoneComponent_a_166_Template, 3, 3, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](167, DetailMilestoneComponent_div_167_Template, 6, 0, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 114)(169, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, "Start Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "form", 115)(172, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](173, "div", 116)(174, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 55)(176, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, " Start Phase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("projectId", ctx.projectId)("selectedMenu", "milestone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.milestoneId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.milestoneName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.incompleteTestRuns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.completedTestRuns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Due on ", ctx.dueDate, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_MILESTONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCompleted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/milestones/detail-milestone/detail-milestone.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L21pbGVzdG9uZXMvZGV0YWlsLW1pbGVzdG9uZS9kZXRhaWwtbWlsZXN0b25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8019:
/*!***********************************************************************!*\
  !*** ./src/app/components/project/milestones/milestones.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilestonesComponent": () => (/* binding */ MilestonesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);








function MilestonesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
}
const _c0 = function (a1) {
  return ["/milestones-add", a1];
};
function MilestonesComponent_ng_template_22_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Add Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx_r7.projectId));
  }
}
function MilestonesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "What's a milestone?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add project milestones (such as software releases) to Test Management System to manage and track multiple test runs for a single milestone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 29)(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "This project doesn't have any milestones, yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 31)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "No milestones have been defined for this project yet. Use the following button to create the first milestone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MilestonesComponent_ng_template_22_a_13_Template, 2, 3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isActive("ADD_MILESTONE"));
  }
}
const _c1 = function (a1) {
  return ["/milestones-edit", a1];
};
function MilestonesComponent_ng_template_24_ng_template_0_div_4_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const milestone_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, milestone_r11.milestoneId));
  }
}
function MilestonesComponent_ng_template_24_ng_template_0_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
}
function MilestonesComponent_ng_template_24_ng_template_0_div_4_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Has ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " active test runs. ");
  }
  if (rf & 2) {
    const milestone_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](milestone_r11.activeTestRun);
  }
}
function MilestonesComponent_ng_template_24_ng_template_0_div_4_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " No active test runs. ");
  }
}
const _c2 = function (a1, a3) {
  return ["/milestones", a1, "detail", a3];
};
function MilestonesComponent_ng_template_24_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 43)(4, "div", 44)(5, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MilestonesComponent_ng_template_24_ng_template_0_div_4_a_9_Template, 2, 3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MilestonesComponent_ng_template_24_ng_template_0_div_4_div_11_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MilestonesComponent_ng_template_24_ng_template_0_div_4_ng_template_12_Template, 4, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MilestonesComponent_ng_template_24_ng_template_0_div_4_ng_template_14_Template, 1, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const milestone_r11 = ctx.$implicit;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c2, ctx_r10.projectId, milestone_r11.milestoneId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](milestone_r11.milestoneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Due on ", milestone_r11.endDate, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.isActive("EDIT_MILESTONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", milestone_r11.activeTestRun)("ngIfThen", _r14)("ngIfElse", _r16);
  }
}
function MilestonesComponent_ng_template_24_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 37)(3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MilestonesComponent_ng_template_24_ng_template_0_div_4_Template, 16, 10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.incompleteMilestones);
  }
}
function MilestonesComponent_ng_template_24_ng_template_1_div_3_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 58)(1, "td")(2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const milestone_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c2, ctx_r22.projectId, milestone_r23.milestoneId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", milestone_r23.milestoneName, " ");
  }
}
function MilestonesComponent_ng_template_24_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h3")(2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 56)(5, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MilestonesComponent_ng_template_24_ng_template_1_div_3_tr_8_Template, 4, 5, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entry_r21.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", entry_r21.value);
  }
}
function MilestonesComponent_ng_template_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MilestonesComponent_ng_template_24_ng_template_1_div_3_Template, 9, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx_r9.completedMilestones));
  }
}
function MilestonesComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MilestonesComponent_ng_template_24_ng_template_0_Template, 5, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MilestonesComponent_ng_template_24_ng_template_1_Template, 5, 3, "ng-template", 35);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.incompleteMilestones.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.completedMilestones.size);
  }
}
function MilestonesComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 59)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx_r5.projectId));
  }
}
function MilestonesComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "There are no milestones.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class MilestonesComponent {
  constructor(route, milestoneService, datePipe, authService) {
    this.route = route;
    this.milestoneService = milestoneService;
    this.datePipe = datePipe;
    this.authService = authService;
    this.projectId = '';
    this.incompleteMilestones = [];
    this.completedMilestones = new Map();
    this.numCompletedMilestones = 0;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      console.log(this.projectId);
      this.milestoneService.findAllByProjectId(parseInt(this.projectId)).subscribe(milestones => {
        for (const milestone of milestones) {
          if (milestone.isCompleted) {
            if (!milestone.completedOn) {
              continue;
            }
            if (milestone.completedOn instanceof Array) {
              let date = this.datePipe.transform(milestone.completedOn[0] + "/" + milestone.completedOn[1] + "/" + milestone.completedOn[2], 'EEEE, MMMM d, y');
              if (!date) {
                continue;
              }
              milestone.completedOn = date;
              let array = this.completedMilestones.get(milestone.completedOn);
              if (!array) {
                this.completedMilestones.set(milestone.completedOn, [milestone]);
              } else {
                array.push(milestone);
              }
              this.numCompletedMilestones++;
            }
          } else {
            if (milestone.endDate instanceof Array) {
              milestone.endDate = milestone.endDate[2] + "/" + milestone.endDate[1] + "/" + milestone.endDate[0];
            }
            this.incompleteMilestones.push(milestone);
          }
        }
      });
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function MilestonesComponent_Factory(t) {
    return new (t || MilestonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_0__.MilestoneService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MilestonesComponent,
    selectors: [["app-milestones"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe])],
    decls: 39,
    vars: 9,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], [1, "sidebar-inner"], ["id", "navigation-milestones-add", "class", "sidebar-button", 3, "routerLink", 4, "ngIf"], ["class", "top", 4, "ngIf"], [1, "top"], [1, "empty", "empty-with-explanation"], [1, "empty-explanation"], [1, "empty-explanation-title"], [1, "empty-explanation-body"], [1, "empty-content", "empty-info"], [1, "empty-title"], [1, "empty-body"], [1, "button-group"], ["class", "button button-left button-add", 3, "routerLink", 4, "ngIf"], [1, "button", "button-left", "button-add", 3, "routerLink"], [3, "ngIf"], [1, "top", "width-4"], ["id", "active"], [2, "margin-top", "1.2em"], ["id", "run-24", "class", "table table-fixed", 4, "ngFor", "ngForOf"], ["id", "run-24", 1, "table", "table-fixed"], ["id", "milestone-3", 1, "row", "flex-milestones-row"], [1, "column", "summary-column", "summary-column-icon", "flex-milestones-1", "icon-milestone-64", "summary-column-first"], [1, "column", "summary-column", "summary-column-first", 2, "flex-grow", "1"], [1, "summary-title", "text-ppp"], [3, "routerLink"], [1, "summary-links", "text-secondary"], ["class", "link", 3, "routerLink", 4, "ngIf"], [1, "summary-description"], ["thenSummaryBlock", ""], ["elseSummaryBlock", ""], [1, "link", 3, "routerLink"], [1, "width-6", 2, "margin-top", "2em"], ["id", "completed"], [4, "ngFor", "ngForOf"], [1, "title"], [1, "run-grid", "grid"], ["class", "odd hoverSensitive", 4, "ngFor", "ngForOf"], [1, "odd", "hoverSensitive"], ["id", "navigation-milestones-add", 1, "sidebar-button", 3, "routerLink"]],
    template: function MilestonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Phase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MilestonesComponent_div_21_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, MilestonesComponent_ng_template_22_Template, 14, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, MilestonesComponent_ng_template_24_Template, 2, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 20)(28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, MilestonesComponent_a_29_Template, 3, 3, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MilestonesComponent_p_30_Template, 2, 0, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "There are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " incompleted and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " completed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("projectId", ctx.projectId)("selectedMenu", "milestone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.incompleteMilestones.length && !ctx.completedMilestones.size)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_MILESTONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.incompleteMilestones && ctx.completedMilestones) || ctx.incompleteMilestones.length == 0 && ctx.completedMilestones.size == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.incompleteMilestones ? ctx.incompleteMilestones.length : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.completedMilestones ? ctx.numCompletedMilestones : 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_2__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/milestones/milestones.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L21pbGVzdG9uZXMvbWlsZXN0b25lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsT0FBQTtFQUNBLGtGQUFBO0VBQ0EsY0FBQTtBQUNOIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uID4gZGl2IHtcbiAgZmxleDogMTtcbiAgLyogMSBhbmQgaXQgd2lsbCBmaWxsIHdob2xlIHNwYWNlIGxlZnQgaWYgbm8gZmxleCB2YWx1ZSBhcmUgc2V0IHRvIG90aGVyIGNoaWxkcmVuKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3483:
/*!****************************************************************************!*\
  !*** ./src/app/components/project/overview/activity/activity.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityComponent": () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_activity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/activity.service */ 7061);





function ActivityComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
  }
}
const _c0 = function (a0) {
  return [a0];
};
function ActivityComponent_ng_template_1_div_3_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 11)(8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const activity_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("status ", activity_r8.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, activity_r8.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", activity_r8.action, " ", activity_r8.userName, "");
  }
}
function ActivityComponent_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h3", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 7)(5, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "col", 8)(7, "col")(8, "col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ActivityComponent_ng_template_1_div_3_tr_10_Template, 10, 10, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", entry_r6.value);
  }
}
function ActivityComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ActivityComponent_ng_template_1_div_3_Template, 11, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx_r2.map));
  }
}
function ActivityComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No activity yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ActivityComponent {
  constructor(route, activityService, datePipe) {
    this.route = route;
    this.activityService = activityService;
    this.datePipe = datePipe;
    this.projectId = 0;
    this.map = new Map();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      if (!this.projectId) {
        return;
      }
      this.activityService.findAllByProjectId(this.projectId).subscribe(activities => {
        for (const activity of activities) {
          activity.createdOn = this.convertDate(activity.createdOn);
          if (!activity.createdOn) continue;
          switch (activity.type) {
            case "Milestone":
              activity.className = 'entity-milestone';
              activity.url = `/milestones/${activity.projectId}/detail/${activity.targetId}`;
              break;
            case "Test Run":
              activity.className = 'entity-run';
              activity.url = `/test-runs/${activity.projectId}/detail/${activity.targetId}`;
              break;
            case "Report":
              activity.className = 'entity-report';
              activity.url = `/reports/view/${activity.targetId}`;
              break;
            default:
              activity.className = '';
              break;
          }
          let list = this.map.get(activity.createdOn);
          if (!list) {
            this.map.set(activity.createdOn, [activity]);
          } else {
            list.push(activity);
          }
        }
      });
    });
  }
  convertDate(createdOn) {
    if (createdOn === undefined) {
      return '';
    }
    if (!isNaN(Number(createdOn))) {
      createdOn = Number(createdOn) * 1000;
    }
    let date = this.datePipe.transform(createdOn, 'EEEE, MMMM d, y');
    if (date == null) {
      return '';
    }
    return date;
  }
  static #_ = this.ɵfac = function ActivityComponent_Factory(t) {
    return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_activity_service__WEBPACK_IMPORTED_MODULE_0__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ActivityComponent,
    selectors: [["app-activity"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe])],
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "history"], [4, "ngFor", "ngForOf"], [2, "margin-top", "1.5em"], [1, "title"], [1, "grid"], [1, "box"], [1, "comment-compact", 2, "width", "200px"], [3, "routerLink"], [1, "right"], [1, "text-soft"], ["id", "activities"], ["id", "noActivities"]],
    template: function ActivityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ActivityComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ActivityComponent_ng_template_1_Template, 5, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ActivityComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.map.size)("ngIfThen", _r1)("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe],
    styles: [".entity-report[_ngcontent-%COMP%] {\n  background: black;\n  background: linear-gradient(to left, black, #757575);\n}\n/*# sourceURL=webpack://./src/app/components/project/overview/activity/activity.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L292ZXJ2aWV3L2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFHQSxvREFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVudGl0eS1yZXBvcnQge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsIGJsYWNrLCAjNzU3NTc1KTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsIGJsYWNrLCAjNzU3NTc1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGJsYWNrLCAjNzU3NTc1KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1874:
/*!*******************************************************************!*\
  !*** ./src/app/components/project/overview/overview.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity/activity.component */ 3483);









function OverviewComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
  }
}
const _c0 = function (a1) {
  return ["/milestones-add", a1];
};
function OverviewComponent_ng_template_31_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Add Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r13.projectId));
  }
}
function OverviewComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This project doesn't have any active milestones. You can add a new milestone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OverviewComponent_ng_template_31_a_3_Template, 2, 3, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isActive("ADD_MILESTONE"));
  }
}
const _c1 = function (a1, a3) {
  return ["/milestones", a1, "detail", a3];
};
function OverviewComponent_ng_template_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66)(3, "div", 67)(4, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const milestone_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c1, ctx_r14.projectId, milestone_r15.milestoneId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](milestone_r15.milestoneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", milestone_r15.endDate ? "Due on " + milestone_r15.endDate : "No due date", " ");
  }
}
function OverviewComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OverviewComponent_ng_template_33_div_1_Template, 8, 6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.milestones);
  }
}
function OverviewComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
  }
}
const _c2 = function (a1) {
  return ["/test-runs-add", a1];
};
function OverviewComponent_ng_template_40_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Add Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c2, ctx_r16.projectId));
  }
}
function OverviewComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This project doesn't have any active test runs. You can add a new test run.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OverviewComponent_ng_template_40_a_3_Template, 2, 3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.isActive("ADD_TESTRUN"));
  }
}
const _c3 = function (a1, a3) {
  return ["/test-runs", a1, "detail", a3];
};
function OverviewComponent_ng_template_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 75)(3, "div", 67)(4, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testRun_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c3, ctx_r17.projectId, testRun_r18.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](testRun_r18.runName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" By ", testRun_r18.fullname, " on ", testRun_r18.createdOn, " ");
  }
}
function OverviewComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OverviewComponent_ng_template_42_div_1_Template, 8, 7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.testRuns);
  }
}
function OverviewComponent_a_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r10.projectId));
  }
}
function OverviewComponent_a_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c2, ctx_r11.projectId));
  }
}
const _c4 = function (a1) {
  return ["/test-cases-add", a1];
};
function OverviewComponent_a_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c4, ctx_r12.projectId));
  }
}
const _c5 = function (a1) {
  return ["/milestones", a1];
};
const _c6 = function (a1) {
  return ["/test-runs", a1];
};
const _c7 = function (a1) {
  return ["/test-cases", a1];
};
class OverviewComponent {
  constructor(route, milestoneService, testRunService, authService) {
    this.route = route;
    this.milestoneService = milestoneService;
    this.testRunService = testRunService;
    this.authService = authService;
    this.projectId = '';
    this.milestones = [];
    this.testRuns = [];
    this.project = {
      projectName: ''
    };
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      console.log(this.projectId);
      if (!this.projectId) {
        return;
      }
      this.milestoneService.findAllByProjectId(parseInt(this.projectId)).subscribe(milestones => {
        this.milestones = milestones.slice(0, 3);
        for (const milestone of this.milestones) {
          if (milestone.endDate instanceof Array) {
            milestone.endDate = milestone.endDate[2] + "/" + milestone.endDate[1] + "/" + milestone.endDate[0];
          }
        }
      });
      this.testRunService.findAllByProjectId(parseInt(this.projectId)).subscribe(testRuns => {
        this.testRuns = testRuns.slice(0, 3);
        for (const testRun of this.testRuns) {
          if (testRun.createdOn instanceof Array) {
            testRun.createdOn = testRun.createdOn[2] + "/" + testRun.createdOn[1] + "/" + testRun.createdOn[0];
          }
        }
      });
    });
  }
  getProject(project) {
    this.project = project;
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_0__.MilestoneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_1__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: OverviewComponent,
    selectors: [["app-overview"]],
    decls: 94,
    vars: 36,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "getProject"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-id"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["id", "content_container"], [1, "table"], [1, "column", "column-p2", "column-pad-right"], [1, "top"], ["id", "navigation-overview-viewmilestones", 1, "nolink", 3, "routerLink"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenMilestoneBlock", ""], ["elseMilestoneBlock", ""], [1, "column", "column-p2", "column-pad-left"], ["id", "navigation-overview-runs", 1, "nolink", 3, "routerLink"], ["thenTestRunBlock", ""], ["elseTestRunBlock", ""], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [1, "sidebar-inner"], [1, "sidebar-h1", "top"], [1, "table", 2, "margin", "1.5em 0 2em 0"], [1, "row"], [1, "column", "summary-column", "summary-column-icon-compact", "icon-milestone-32", "summary-column-first"], [1, "column", "summary-column", "summary-column-first"], [1, "summary-title", "summary-title-compact"], ["id", "sidebar-milestones-overview", 3, "routerLink"], [1, "summary-description-compact", "text-secondary"], ["id", "sidebar-runs-add", "class", "link", 3, "routerLink", 4, "ngIf"], ["id", "sidebar-milestones-viewall", 1, "link", 3, "routerLink"], [1, "column", "summary-column", "summary-column-icon-compact", "icon-run-32"], [1, "column", "summary-column"], ["id", "sidebar-runs-overview", 3, "routerLink"], ["id", "sidebar-runs-viewall", 1, "link", 3, "routerLink"], [1, "column", "summary-column", "summary-column-icon-compact", "icon-suite-32", "summary-column-last"], [1, "column", "summary-column", "summary-column-last"], ["id", "sidebar-cases-overview", 3, "routerLink"], ["id", "sidebar-suites-viewall", 1, "link", 3, "routerLink"], [1, "button-group"], ["id", "navigation-overview-addmilestones", "class", "button button-left button-add", 3, "routerLink", 4, "ngIf"], ["id", "navigation-overview-addmilestones", 1, "button", "button-left", "button-add", 3, "routerLink"], [1, "table", 2, "margin-top", "1.2em"], ["class", "row flex-milestones-row", 4, "ngFor", "ngForOf"], [1, "row", "flex-milestones-row"], [1, "column", "summary-column", "summary-column-icon-compact", "flex-milestones-1-compact", "icon-milestone-32", "summary-column-first"], [1, "column", "summary-column", "flex-milestones-2-compact", "summary-column-first"], [1, "summary-title", "summary-title-compact", "text-ppp"], ["id", "navigation-overview-viewmilestones", 3, "routerLink"], [1, "summary-description-compact", "text-secondary", "text-ppp"], ["id", "navigation-overview-addrunssuite", "class", "button button-left button-add", 3, "routerLink", 4, "ngIf"], ["id", "navigation-overview-addrunssuite", 1, "button", "button-left", "button-add", 3, "routerLink"], ["class", "row flex-runs-row", 4, "ngFor", "ngForOf"], [1, "row", "flex-runs-row"], [1, "column", "summary-column", "summary-column-icon-compact", "flex-runs-1-compact", "icon-run-32", "summary-column-first"], [1, "column", "summary-column", "flex-runs-2-compact", "summary-column-first"], ["id", "navigation-overview-viewruns", 3, "routerLink"], ["id", "sidebar-runs-add", 1, "link", 3, "routerLink"]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("getProject", function OverviewComponent_Template_app_new_menu_project_getProject_1_listener($event) {
          return ctx.getProject($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "h1", 21)(28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, OverviewComponent_div_30_Template, 1, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, OverviewComponent_ng_template_31_Template, 4, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, OverviewComponent_ng_template_33_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 26)(36, "h1", 21)(37, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Test Runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, OverviewComponent_div_39_Template, 1, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, OverviewComponent_ng_template_40_Template, 4, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, OverviewComponent_ng_template_42_Template, 2, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "app-activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 31)(47, "div", 32)(48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " No test case selected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " You can select a different group or change the filters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 35)(53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 39)(57, "div", 40)(58, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 42)(61, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 45)(64, "div", 46)(65, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, OverviewComponent_a_68_Template, 2, 3, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 52)(75, "div", 46)(76, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Test Runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, OverviewComponent_a_79_Template, 2, 3, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 56)(86, "div", 46)(87, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Test Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, OverviewComponent_a_90_Template, 2, 3, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("projectId", ctx.projectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("P", ctx.project.projectId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.project.projectName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c5, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.milestones.length == 0)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c6, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.testRuns.length == 0)("ngIfThen", _r6)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](24, _c5, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_MILESTONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c5, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](28, _c6, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_TESTRUN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](30, _c6, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](32, _c7, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_TESTCASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c7, ctx.projectId));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__.ActivityComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/overview/overview.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1728:
/*!******************************************************************************!*\
  !*** ./src/app/components/project/report/add-report/add-report.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReportComponent": () => (/* binding */ AddReportComponent)
/* harmony export */ });
/* harmony import */ var _select_test_run_dialog_select_test_run_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-test-run-dialog/select-test-run-dialog.component */ 9910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);










function AddReportComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const testRun_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](testRun_r1.runName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](testRun_r1.milestoneName);
  }
}
const _c0 = function (a1) {
  return ["/reports-add", a1];
};
class AddReportComponent {
  constructor(route, reportService, toastr, router, dialog, _location) {
    this.route = route;
    this.reportService = reportService;
    this.toastr = toastr;
    this.router = router;
    this.dialog = dialog;
    this._location = _location;
    this.projectId = '';
    this.fullName = '';
    this.des = '';
    this.testRunsSelected = [];
    this.oldSelectedTestRun = new Set();
    this.report = {
      projectId: parseInt(this.projectId),
      reportName: '',
      reportDescription: '',
      jsonData: JSON.stringify({
        results: [],
        testRuns: this.testRunsSelected
      })
    };
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      console.log(this.projectId);
      this.report.projectId = parseInt(this.projectId);
    });
  }
  submit() {
    if (!(this.report.testRunIds && this.report.reportName && this.report.reportName.trim())) {
      this.toastr.warning('Name and Test Run must not empty', 'Warning');
      return;
    }
    this.reportService.addReport(this.report).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add report success', 'Success');
        this.router.navigateByUrl('/reports/' + this.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add report failed', 'Error');
      }
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(_select_test_run_dialog_select_test_run_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SelectTestRunDialogComponent, {
      data: {
        project_id: this.projectId,
        test_run_ids: this.report.testRunIds,
        old_test_runs: this.oldSelectedTestRun
      }
    }).afterClosed().subscribe(result => {
      if (result && result.data) {
        this.oldSelectedTestRun = result.data;
        this.testRunsSelected = [...result.data];
      }
      console.log(this.testRunsSelected);
      this.report.jsonData = JSON.stringify({
        results: [],
        testRuns: this.testRunsSelected
      });
      this.report.testRunIds = this.testRunsSelected.map(a => {
        return a.runId;
      });
      console.log(this.report.testRunIds);
    });
  }
  backClicked() {
    this._location.back();
  }
  static #_ = this.ɵfac = function AddReportComponent_Factory(t) {
    return new (t || AddReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AddReportComponent,
    selectors: [["app-add-report"]],
    decls: 344,
    vars: 11,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "notificationbar", 1, "notificationbar", "notificationbar-hidden"], [1, "notificationbar", "notificationbar-local"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner"], ["action", "index.php?/reports/add_job/2&plugin=runs_summary", "method", "post"], ["type", "hidden", "name", "_token", "value", "FecjS1sIIOIkrBlkY.N."], [1, "form-group", "form-group-main"], ["for", "name"], [1, "form-required"], ["type", "text", "name", "name", "id", "name", "maxlength", "250", "value", "Runs (Summary) %date%", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "bottom"], ["for", "description"], ["rows", "6", "name", "description", "id", "description", 1, "form-control", "form-control-full", 3, "ngModel", "ngModelChange"], [1, "form-description", "form-description-full"], [1, "h1-dark", 2, "margin-top", "1.5em"], [1, "report-form"], ["type", "hidden", "name", "tab", "id", "tab"], [1, "tabs"], [1, "tab-header"], ["href", "javascript:void(0)", "rel", "1", 1, "tab1", "current"], [1, "tab-body", "tab-frame"], [1, "tab", "tab1"], [2, "margin-left", "35px"], [1, "grid-container", 2, "margin-bottom", "5px"], ["id", "custom_runs_grid", 1, "grid"], [1, "header", "droppable"], [4, "ngFor", "ngForOf"], [2, "margin-top", "1em"], ["id", "custom_runs_add", 3, "click"], ["type", "hidden", "name", "custom_runs_filters", "id", "custom_runs_filters", "value", ""], ["type", "hidden", "name", "custom_runs_ids", "id", "custom_runs_ids", "value", ""], [1, "tab", "tab2", "hidden"], [1, "top"], [1, "checkbox", "form-checkbox", 2, "margin-left", "15px"], ["type", "checkbox", "id", "custom_status_include", "name", "custom_status_include", "value", "1", "checked", "checked"], ["type", "checkbox", "id", "custom_activities_include", "name", "custom_activities_include", "value", "1", "checked", "checked"], ["type", "checkbox", "id", "custom_progress_include", "name", "custom_progress_include", "value", "1", "checked", "checked"], [1, "checkbox", 2, "margin-left", "15px", "padding-bottom", "0"], ["type", "checkbox", "id", "custom_tests_include", "name", "custom_tests_include", "value", "1", "checked", "checked"], [1, "tab", "tab3", "hidden"], [2, "margin-left", "15px"], ["id", "custom_activities_daterange", "name", "custom_activities_daterange", 1, "form-control", "form-select", 2, "width", "200px"], ["value", "3"], ["value", "4"], ["value", "5", "selected", "selected"], ["value", "7"], ["value", "9"], ["value", "11"], ["value", "14"], ["value", "15"], ["value", "6"], ["value", "8"], ["value", "10"], ["value", "12"], ["value", "13"], ["value", "2"], ["id", "custom_activities_daterange_from_container", 1, "hidden", 2, "margin-left", "15px", "margin-top", "8px"], [2, "float", "left", "line-height", "150%"], [2, "margin-left", "50px"], ["type", "text", "name", "custom_activities_daterange_from", "id", "custom_activities_daterange_from", "value", "", 1, "form-control", "datepicker", 2, "width", "125px"], [2, "clear", "both"], ["id", "custom_activities_daterange_to_container", 1, "hidden", 2, "margin-left", "15px", "margin-top", "8px"], ["type", "text", "name", "custom_activities_daterange_to", "id", "custom_activities_daterange_to", "value", "", 1, "form-control", "datepicker", 2, "width", "125px"], [1, ""], [1, "radio", "form-radio", 2, "margin-left", "15px"], ["type", "radio", "id", "custom_activities_statuses_include_all", "name", "custom_activities_statuses_include", "value", "1", "checked", "checked"], ["type", "radio", "id", "custom_activities_statuses_include_selected", "name", "custom_activities_statuses_include", "value", "2"], ["id", "custom_activities_statuses_ids", "name", "custom_activities_statuses_ids[]", "multiple", "multiple", 1, "form-control", "form-select", 2, "width", "100%", "height", "200px"], ["value", "1"], ["value", "5"], [1, "form-description"], ["id", "custom_activities_limit", "name", "custom_activities_limit", 1, "form-control", "form-select", 2, "width", "200px"], ["value", "25"], ["value", "50"], ["value", "100", "selected", "selected"], ["value", "250"], ["value", "500"], ["value", "1000"], [1, "tab", "tab4", "hidden"], [1, "form-message", "filter-info"], ["id", "custom_tests_filter_info"], ["id", "custom_tests_filter_change", "href", "javascript:void(0)"], ["id", "custom_tests_filter_busy", 1, "busy"], [1, "icon-progress-inline"], ["type", "hidden", "name", "custom_tests_filters", "id", "custom_tests_filters", "value", ""], ["id", "custom_tests_grid", 1, "grid"], [1, "drag-no"], [1, "icon-dragnoblue"], ["id", "column-tests:id", "rel", "tests:id", 1, "row", "droppable", "odd"], [1, "drag"], [1, "draggable", "icon-draggray"], [1, "dragHelper"], [1, "input", 2, "padding-top", "4px"], ["type", "text", "onkeypress", "return App.ReportPlugins.Columns.Select.onWidthChanged(this, event, 1000)", "value", "75", 1, "width"], ["tabindex", "-1", "href", "javascript:void(0)", "onclick", "this.blur(); App.ReportPlugins.Columns.Select.remove('tests:id'); return false;"], [1, "icon-small-delete"], ["id", "column-cases:title", "rel", "cases:title", 1, "row", "droppable", "even"], ["type", "text", "onkeypress", "return App.ReportPlugins.Columns.Select.onWidthChanged(this, event, 1000)", "value", "0", 1, "width"], ["tabindex", "-1", "href", "javascript:void(0)", "onclick", "this.blur(); App.ReportPlugins.Columns.Select.remove('cases:title'); return false;"], ["id", "custom_tests_add", "href", "javascript:void(0)"], ["type", "hidden", "name", "custom_tests_columns", "id", "custom_tests_columns", "value", ""], ["id", "custom_tests_limit", "name", "custom_tests_limit", 1, "form-control", "form-select", 2, "width", "200px"], [1, "button-group", "form-buttons"], ["id", "submit", 1, "button", "button-left", "button-positive", "button-ok", 3, "click"], [1, "button", "button-left", "button-negative", "button-cancel", 3, "click"], ["id", "filterTestsBubble", 1, "bubble", "filter-bubble", "hidden"], ["id", "filterTestsContent", 1, "filter-bubble-inner"], ["id", "addColumnDialog", 1, "dialog", 2, "width", "400px"], [1, "dialog-title"], ["id", "addColumnForm", 1, "dialogFormDefault"], [1, "dialog-body"], ["for", "addColumnItems"], ["name", "addColumnItems", "id", "addColumnItems", 1, "form-control", "form-control-full", "form-select"], ["id", "addColumn-tests:assignedto_id", "value", "tests:assignedto_id"], ["id", "addColumn-cases:custom_automation_type", "value", "cases:custom_automation_type"], ["id", "addColumn-tests:original_case_id", "value", "tests:original_case_id"], ["id", "addColumn-tests:defects", "value", "tests:defects"], ["id", "addColumn-tests:defects_all", "value", "tests:defects_all"], ["id", "addColumn-tests:elapsed", "value", "tests:elapsed"], ["id", "addColumn-tests:elapsed_all", "value", "tests:elapsed_all"], ["id", "addColumn-cases:estimate", "value", "cases:estimate"], ["id", "addColumn-cases:estimate_forecast", "value", "cases:estimate_forecast"], ["id", "addColumn-tests:in_progress_by", "value", "tests:in_progress_by"], ["id", "addColumn-cases:priority_id", "value", "cases:priority_id"], ["id", "addColumn-cases:refs", "value", "cases:refs"], ["id", "addColumn-cases:section_id", "value", "cases:section_id"], ["id", "addColumn-tests:status_id", "value", "tests:status_id"], ["id", "addColumn-cases:template_id", "value", "cases:template_id"], ["id", "addColumn-tests:tested_by", "value", "tests:tested_by"], ["id", "addColumn-tests:tested_on", "value", "tests:tested_on"], ["id", "addColumn-cases:type_id", "value", "cases:type_id"], ["id", "addColumn-tests:version", "value", "tests:version"], ["id", "addColumn-tests:version_all", "value", "tests:version_all"], [1, "button-group", "dialog-buttons-highlighted"], ["id", "addColumnSubmit", "type", "submit", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default"], [1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close"], ["id", "filterRunsBubble", 1, "bubble", "filter-bubble", "hidden"], ["id", "filterRunsContent", 1, "filter-bubble-inner"], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], [1, "sidebar-inner"], [1, "sidebar-h1", "top"], [2, "margin-left", "10px"], [1, "grid", "create-report"], [1, "action"], [1, "dark"], [1, "dark", "text-softer"], ["tooltip-text", "Shows a status summary and overview for test runs.", "tooltip-position", "left", 1, "link-noline", "link-tooltip", 3, "routerLink"], [1, "dark", "action-large"], [3, "routerLink"], [1, "icon-add"]],
    template: function AddReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Add Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18)(24, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 21)(27, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddReportComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.report.reportName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 25)(33, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddReportComponent_Template_textarea_ngModelChange_35_listener($event) {
          return ctx.report.reportDescription = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Use the description to explain the content and purpose of this report or add links to additional resources.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Report Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 32)(43, "div", 33)(44, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Test Runs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 35)(47, "div", 36)(48, "div", 37)(49, "div", 38)(50, "table", 39)(51, "tr", 40)(52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Test Run");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, AddReportComponent_tr_58_Template, 7, 2, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 42)(60, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReportComponent_Template_a_click_60_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Add Test Runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 44)(63, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 46)(65, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Include the following details/sections:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 48)(68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Status and test statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 48)(72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Activity (results over time) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 48)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " Progress and remaining estimate/forecast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 52)(80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, " Tests and test results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 54)(84, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Use the following time frame: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 55)(89, "select", 56)(90, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "This week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "This month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Last 24 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Last 48 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Last 14 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Last 30 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Last 60 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Last 90 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 71)(119, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, " From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 76)(125, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, " To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Include the following statuses:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 79)(134, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " All statuses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 79)(138, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " The following statuses only: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "div", 37)(142, "select", 82)(143, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Blocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Untested");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "Retest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "You can select multiple statuses by holding Ctrl/Cmd on your keyboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "Maximum number of activities to display:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 55)(158, "select", 86)(159, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, " 25 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, " 50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, " 250 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, " 500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, " 1000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "div", 93)(174, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Apply the following filter for the tests:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 55)(177, "div", 94)(178, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, " [No filter set] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](185, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](186, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "Include the following columns: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 55)(192, "div", 38)(193, "table", 100)(194, "tr", 40)(195, "th", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](196, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](201, "th")(202, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "tr", 103)(204, "td", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "td", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "td", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](209, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "td")(212, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](213, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "tr", 111)(215, "td", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](216, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "td", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "td", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](220, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "td")(223, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](224, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "div", 42)(226, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, "Add Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](228, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, "Maximum number of tests to display:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "div", 55)(232, "select", 116)(233, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, " 25 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, " 50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, " 250 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, " 500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246, " 1000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "div", 117)(248, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReportComponent_Template_button_click_248_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, " Add Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReportComponent_Template_a_click_250_listener() {
          return ctx.backClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](253, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "div", 122)(255, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, " Add Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "form", 124)(258, "div", 125)(259, "div", 25)(260, "label", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "select", 127)(265, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, " Assigned To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268, " Automation Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, " Case ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, " Defects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, " Defects All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276, " Elapsed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](277, "option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278, " Elapsed All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, " Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282, " Forecast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, " In Progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](286, " Priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](288, " References ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](289, "option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](290, " Section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, " Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, " Tested By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298, " Tested On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, " Version ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, " Version All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306, "Select the column to add to the tables.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "div", 148)(308, "button", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, " Add Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](311, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](313, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](314, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "div", 154)(316, "div", 155)(317, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, " No test case selected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, " You can select a different group or change the filters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "div", 158)(322, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](323, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](324, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "div", 162)(326, "div", 163)(327, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "Create Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](330, "You can create or schedule reports for the following report templates:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "div", 165)(332, "table", 166)(333, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](334, "col")(335, "col", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "tbody")(337, "tr", 168)(338, "td", 169)(339, "a", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](340, " Create Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "td", 171)(342, "a", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](343, "div", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("projectId", ctx.projectId)("selectedMenu", "reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.report.reportName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.report.reportDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.testRunsSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](281);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx.projectId));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_2__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/report/add-report/add-report.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3JlcG9ydC9hZGQtcmVwb3J0L2FkZC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLE9BQUE7RUFDQSxrRkFBQTtFQUNBLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc2VjdGlvbiA+IGRpdiB7XG4gIGZsZXg6IDE7XG4gIC8qIDEgYW5kIGl0IHdpbGwgZmlsbCB3aG9sZSBzcGFjZSBsZWZ0IGlmIG5vIGZsZXggdmFsdWUgYXJlIHNldCB0byBvdGhlciBjaGlsZHJlbiovXG4gIG92ZXJmbG93OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9910:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/project/report/add-report/select-test-run-dialog/select-test-run-dialog.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectTestRunDialogComponent": () => (/* binding */ SelectTestRunDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);









function SelectTestRunDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1, a3) {
  return ["/test-runs", a1, "detail", a3];
};
function SelectTestRunDialogComponent_div_14_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 40)(1, "td", 36)(2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectTestRunDialogComponent_div_14_div_14_tr_17_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const testRun_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.select(testRun_r5.runId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const testRun_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "selected-", testRun_r5.runId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", testRun_r5.runId)("checked", testRun_r5.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, ctx_r4.projectId, testRun_r5.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](testRun_r5.runName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](testRun_r5.milestoneName);
  }
}
function SelectTestRunDialogComponent_div_14_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h3", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 34)(5, "table", 35)(6, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "col", 36)(8, "col")(9, "col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tbody")(11, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Test Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SelectTestRunDialogComponent_div_14_div_14_tr_17_Template, 8, 9, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", entry_r3.value);
  }
}
function SelectTestRunDialogComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "div", 26)(5, "div", 27)(6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectTestRunDialogComponent_div_14_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.selectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectTestRunDialogComponent_div_14_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.unselectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SelectTestRunDialogComponent_div_14_div_14_Template, 18, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 1, ctx_r1.completedTestRuns));
  }
}
class SelectTestRunDialogComponent {
  constructor(route, testRunService, datePipe, authService, dialog, data, testRunDialog, milestoneService) {
    this.route = route;
    this.testRunService = testRunService;
    this.datePipe = datePipe;
    this.authService = authService;
    this.dialog = dialog;
    this.data = data;
    this.testRunDialog = testRunDialog;
    this.milestoneService = milestoneService;
    this.projectId = '';
    this.incompleteTestRuns = [];
    this.testRuns = [];
    this.selectedTestRun = new Set();
    this.completedTestRuns = new Map();
    this.numCompletedTestRuns = 0;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = this.data.project_id;
      console.log(this.projectId);
      this.testRunService.findAllByProjectId(parseInt(this.projectId)).subscribe(testRuns => {
        this.testRuns = testRuns;
        for (const testRun of testRuns) {
          if (testRun.isCompleted) {
            if (!testRun.completedOn) {
              continue;
            }
            if (testRun.completedOn instanceof Array) {
              let date = this.datePipe.transform(testRun.completedOn[0] + '/' + testRun.completedOn[1] + '/' + testRun.completedOn[2], 'EEEE, MMMM d, y');
              if (!date) {
                continue;
              }
              testRun.completedOn = date;
              if (testRun.milestoneId) {
                this.milestoneService.findByMilestoneId(testRun.milestoneId).subscribe(milestone => {
                  testRun.milestoneName = milestone.milestoneName;
                });
              }
              if (this.data.test_run_ids && this.data.old_test_runs) {
                this.data.old_test_runs.forEach(a => {
                  this.selectedTestRun.add(a);
                });
                testRun.isSelected = this.data.test_run_ids.includes(testRun.runId);
              }
              let array = this.completedTestRuns.get(testRun.completedOn);
              if (!array) {
                this.completedTestRuns.set(testRun.completedOn, [testRun]);
              } else {
                array.push(testRun);
              }
              this.numCompletedTestRuns++;
            }
          } else {
            if (testRun.createdOn instanceof Array) {
              testRun.createdOn = testRun.createdOn[2] + '/' + testRun.createdOn[1] + '/' + testRun.createdOn[0];
            }
            this.incompleteTestRuns.push(testRun);
          }
        }
      });
    });
  }
  select(id) {
    let testRunSet = new Set();
    let testRun = this.testRuns.find(a => {
      if (a.runId == id) {
        testRunSet.add(id);
        return a;
      } else return undefined;
    });
    this.data.test_run_ids = [...testRunSet];
    if (testRun) this.selectedTestRun.add(testRun);
    console.log(this.selectedTestRun);
  }
  selectAll() {
    this.selectedTestRun = new Set(this.testRuns.filter(a => {
      return a;
    }));
    this.data.test_run_ids = [...this.selectedTestRun].map(a => {
      return a.runId;
    });
    this.completedTestRuns.forEach(a => {
      a.forEach(b => {
        b.isSelected = true;
      });
    });
    console.log(this.completedTestRuns);
  }
  unselectAll() {
    this.selectedTestRun = new Set();
    this.data.test_run_ids = [];
    console.log(this.selectedTestRun);
    this.completedTestRuns.forEach(a => {
      a.forEach(b => {
        b.isSelected = false;
      });
    });
  }
  submit() {
    if ([...this.selectedTestRun].every(x => this.data.old_test_runs.has(x)) && this.selectedTestRun.size == this.data.old_test_runs.size && this.data.old_test_runs.size > 0) {
      this.testRunDialog.close({
        event: '',
        data: this.data.old_test_runs
      });
    } else {
      this.testRunDialog.close({
        event: '',
        data: this.selectedTestRun
      });
    }
  }
  close() {
    this.testRunDialog.close({
      event: ''
    });
  }
  static #_ = this.ɵfac = function SelectTestRunDialogComponent_Factory(t) {
    return new (t || SelectTestRunDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_0__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_2__.MilestoneService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SelectTestRunDialogComponent,
    selectors: [["app-select-test-run-dialog"]],
    decls: 25,
    vars: 2,
    consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "ui-dialog-title-addRunsDialog", "id", "dialog-ident-addRunsDialog", 1, "ui-dialog", 2, "display", "block", "z-index", "1002", "outline", "0px", "height", "auto", "width", "850px", "position", "inherit !important"], [1, "ui-dialog-titlebar", "ui-widget-header", "ui-corner-all", "ui-helper-clearfix"], ["id", "ui-dialog-title-addRunsDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all", 3, "click"], [1, "ui-icon", "ui-icon-closethick"], ["id", "addRunsDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "height", "661px", "display", "block", "min-height", "0px"], [1, "dialog-title"], ["id", "addRunsForm"], [1, "dialog-body", 2, "padding", "0px", "height", "602px"], ["id", "addRunsContainer", 1, "select-dialog-container"], ["id", "addRunsProgress", "class", "select-dialog-progress", "style", "margin: auto; padding-top: 241px; display: block;", 4, "ngIf"], ["id", "addRunsContent", "class", "select-dialog-content hidden", "style", "display: block;", 4, "ngIf"], [1, "dialog-buttons-pane-container"], [1, "button-group", "dialog-buttons-highlighted"], ["type", "submit", "id", "addRunsSubmit", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default", 3, "click"], ["id", "addRunsClose", 1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"], [1, "ui-resizable-handle", "ui-resizable-n"], [1, "ui-resizable-handle", "ui-resizable-e"], [1, "ui-resizable-handle", "ui-resizable-s"], [1, "ui-resizable-handle", "ui-resizable-w"], ["id", "addRunsProgress", 1, "select-dialog-progress", 2, "margin", "auto", "padding-top", "241px", "display", "block"], ["title", "Loading...", 1, "icon-progress-large"], ["id", "addRunsContent", 1, "select-dialog-content", "hidden", 2, "display", "block"], [1, "select-dialog-column", "select-dialog-column-main-container"], ["id", "addRunsMain", 1, "select-dialog-column", "select-dialog-column-main"], [1, "select-dialog-scroll"], [1, "select-dialog-group"], [1, "select-dialog-toolbar", "toolbar"], [1, "toolbar-inner", "text-secondary"], [1, "link", 3, "click"], ["id", "addRunsTables"], [4, "ngFor", "ngForOf"], [1, ""], [1, "title"], [1, "grid-container", 2, "margin-bottom", "2em"], [1, "grid"], [1, "checkbox"], [2, "width", "25%"], [1, "header"], ["class", "odd hoverSensitive", 4, "ngFor", "ngForOf"], [1, "odd", "hoverSensitive"], ["type", "checkbox", 1, "selectionCheckbox", 3, "value", "name", "checked", "click"], ["target", "_blank", 3, "routerLink"], [1, "sub"]],
    template: function SelectTestRunDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add Test Runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectTestRunDialogComponent_Template_a_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add Test Runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7)(11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SelectTestRunDialogComponent_div_13_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SelectTestRunDialogComponent_div_14_Template, 16, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectTestRunDialogComponent_Template_button_click_17_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " OK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectTestRunDialogComponent_Template_a_click_19_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.completedTestRuns.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.completedTestRuns.size);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe],
    styles: [".mat-mdc-dialog-container .mdc-dialog__surface {\n  overflow: unset;\n}\n/*# sourceURL=webpack://./src/app/components/project/report/add-report/select-test-run-dialog/select-test-run-dialog.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3JlcG9ydC9hZGQtcmVwb3J0L3NlbGVjdC10ZXN0LXJ1bi1kaWFsb2cvc2VsZWN0LXRlc3QtcnVuLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LW1kYy1kaWFsb2ctY29udGFpbmVyIC5tZGMtZGlhbG9nX19zdXJmYWNlIHtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3454:
/*!************************************************************************************!*\
  !*** ./src/app/components/project/report/detail-report/detail-report.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailReportComponent": () => (/* binding */ DetailReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/report.service */ 2820);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ 3239);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);







function DetailReportComponent_apx_chart_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "apx-chart", 35, 36);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("colors", ctx_r0.chartOptions.colors);
  }
}
const _c0 = function (a1, a3) {
  return ["/test-runs", a1, "detail", a3];
};
function DetailReportComponent_div_43_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 40)(1, "td", 41)(2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const testRun_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r5.report.projectId, testRun_r6.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", testRun_r6.runName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate5"](" ", testRun_r6.passedCount, " Passed, ", testRun_r6.blockedCount, " Blocked, ", testRun_r6.untestedCount, " Untested, ", testRun_r6.retestCount, " Retest and ", testRun_r6.failedCount, " Failed. ");
  }
}
function DetailReportComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h3")(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 38)(5, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "col")(7, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DetailReportComponent_div_43_tr_9_Template, 6, 10, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", entry_r4.value);
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", result_r13.status, " ");
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 59, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", result_r13.status, " ");
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", result_r13.status, " ");
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 61, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", result_r13.status, " ");
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 62, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", result_r13.status, " ");
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_6_Template, 3, 2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_7_Template, 3, 2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_8_Template, 3, 2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_9_Template, 3, 2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DetailReportComponent_ng_template_48_ng_template_2_tr_15_button_10_Template, 3, 2, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const result_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" T", result_r13.resultId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", result_r13.caseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r13.status == "Untested");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r13.status == "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r13.status == "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r13.status == "Retest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r13.status == "Failed");
  }
}
function DetailReportComponent_ng_template_48_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 43)(3, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "col", 44)(5, "col")(6, "col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody")(8, "tr", 46)(9, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DetailReportComponent_ng_template_48_ng_template_2_tr_15_Template, 11, 7, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", section_r10.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", section_r10.value);
  }
}
function DetailReportComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DetailReportComponent_ng_template_48_ng_template_2_Template, 16, 2, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "keyvalue");
  }
  if (rf & 2) {
    const testRun_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", testRun_r7.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, testRun_r7.value));
  }
}
class DetailReportComponent {
  constructor(route, reportService, datePipe) {
    this.route = route;
    this.reportService = reportService;
    this.datePipe = datePipe;
    this.numUntested = 0;
    this.percentPassed = '0';
    this.percentUntested = '0';
    this.totalResults = 0;
    this.report = {};
    this.testRunsMap = new Map();
    this.sectionResultsMap = new Map();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.reportService.findByReportId(parseInt(params['id'])).subscribe(report => {
        this.report = report;
        this.report.createdOn = this.convertDate(this.report.createdOn);
        if (typeof this.report.jsonData === 'string') {
          this.report.jsonData = JSON.parse(this.report.jsonData);
        }
        if (typeof this.report.jsonData !== 'string' && this.report.jsonData) {
          this.extractTestRuns(this.report.jsonData.testRuns);
          this.createChart(this.report.jsonData.testRuns);
        }
        console.log(this.report);
      });
    });
  }
  createChart(testRuns) {
    let results = testRuns.flatMap(run => run.results);
    this.chartOptions = {
      series: [0, 0, 0, 0, 0],
      chart: {
        width: 390,
        type: "pie",
        height: 260
      },
      labels: ["Passed", "Blocked", "Retest", "Failed", "Untested"],
      colors: ['#338a41', '#474747', '#b99109', '#a9093a', '#737373']
    };
    this.numUntested = 0;
    for (const result of results) {
      if (result === undefined) continue;
      switch (result.status) {
        case "Passed":
          this.chartOptions.series[0]++;
          break;
        case "Blocked":
          this.chartOptions.series[1]++;
          break;
        case "Retest":
          this.chartOptions.series[2]++;
          break;
        case "Failed":
          this.chartOptions.series[3]++;
          break;
        case "Untested":
          this.chartOptions.series[4]++;
          this.numUntested++;
          break;
        default:
          break;
      }
    }
    this.percentUntested = (this.numUntested / results.length * 100).toFixed(1);
    this.percentPassed = (this.chartOptions.series[0] / results.length * 100).toFixed(1);
    this.totalResults = results.length;
  }
  extractTestRuns(testRuns) {
    for (const testRun of testRuns) {
      if (testRun.createdOn instanceof Array) {
        let date = this.datePipe.transform(testRun.createdOn[0] + '/' + testRun.createdOn[1] + '/' + testRun.createdOn[2], 'EEEE, MMMM d, y');
        if (!date) {
          continue;
        }
        testRun.createdOn = date;
        let array = this.testRunsMap.get(testRun.createdOn);
        if (!array) {
          this.testRunsMap.set(testRun.createdOn, [testRun]);
        } else {
          array.push(testRun);
        }
      }
      if (!testRun.results) {
        continue;
      }
      let map = new Map();
      for (const result of testRun.results) {
        if (!result.sectionName) continue;
        let tempResults = map.get(result.sectionName);
        if (!tempResults) {
          map.set(result.sectionName, [result]);
        } else {
          tempResults.push(result);
        }
      }
      this.sectionResultsMap.set(testRun.runName, map);
    }
  }
  convertDate(createdOn) {
    if (createdOn === undefined) {
      return '';
    }
    if (!isNaN(Number(createdOn))) {
      createdOn = Number(createdOn) * 1000;
    }
    let date = this.datePipe.transform(createdOn, 'd/M/yyyy, h:mm a');
    if (date == null) {
      return '';
    }
    return date;
  }
  static #_ = this.ɵfac = function DetailReportComponent_Factory(t) {
    return new (t || DetailReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_0__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DetailReportComponent,
    selectors: [["app-detail-report"]],
    decls: 50,
    vars: 17,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], [2, "display", "flex", "flex-direction", "column"], [2, "flex", "1"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], ["id", "body", 1, "table", 2, "display", "table"], ["id", "content", 1, "column", "content", "overflow-content"], [2, "height", "100%", "overflow-y", "scroll", "padding", "0 15px"], ["id", "content"], [1, "comment", "bottom"], ["id", "statsContainer"], ["rel", "4", 1, "chart-pie"], ["id", "tablechart_testun", 1, "table-extended", 2, "height", "100%"], ["id", "statusChartContainer", 2, "padding", "0", "height", "100%"], ["id", "chart"], [3, "series", "chart", "labels", "colors", 4, "ngIf"], [1, "column", "chart-pie-column-percent"], [1, "chart-pie-percent", 2, "padding-top", "5em"], [1, "chart-pie-percent-title"], [1, "chart-pie-percent-description"], [1, "chart-pie-percent-note", "text-secondary", 2, "line-height", "130%"], ["download", "TestRail-stats-1-20230107092820.png", "href", "#", "id", "dl", "hidden", ""], [1, "top"], ["src", "index.php?/reports/get_resource/1&path=images/report-assets/help.svg", "alt", "", "title", "Shows the test runs of this report.", 1, "right", "noPrint", "w16"], ["id", "completed"], [4, "ngFor", "ngForOf"], ["src", "index.php?/reports/get_resource/1&path=images/report-assets/help.svg", "alt", "", "title", "Shows the tests and their current statuses for the selected test runs.", 1, "right", "noPrint", "w16"], ["ngFor", "", 3, "ngForOf"], [3, "series", "chart", "labels", "colors"], ["chart", ""], [1, "title"], [1, "run-grid", "grid"], ["class", "odd hoverSensitive", 4, "ngFor", "ngForOf"], [1, "odd", "hoverSensitive"], [2, "width", "300px"], [3, "routerLink"], [1, "grid"], [2, "width", "75px"], [2, "width", "125px"], [1, "header"], [1, "w30", "id"], [1, "w30", "title"], [1, "status"], [1, "id"], ["rel", "4", 1, "js-status"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #737373; color: #ffffff", 3, "disabled", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #338a41; color: #ffffff", 3, "disabled", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #474747; color: #ffffff", 3, "disabled", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #b99109; color: #ffffff", 3, "disabled", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #a9093a; color: #ffffff", 3, "disabled", 4, "ngIf"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#737373", "color", "#ffffff", 3, "disabled"], ["button", ""], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#338a41", "color", "#ffffff", 3, "disabled"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#474747", "color", "#ffffff", 3, "disabled"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#b99109", "color", "#ffffff", 3, "disabled"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#a9093a", "color", "#ffffff", 3, "disabled"]],
    template: function DetailReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "link", 4)(6, "link", 5)(7, "link", 6)(8, "link", 7)(9, "link", 8)(10, "link", 9)(11, "link", 10)(12, "link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DetailReportComponent_apx_chart_28_Template, 2, 4, "apx-chart", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 23)(30, "div", 24)(31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "download image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Test Runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, DetailReportComponent_div_43_Template, 10, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Tests & Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, DetailReportComponent_ng_template_48_Template, 4, 4, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("projectId", ctx.report.projectId + "")("selectedMenu", "reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.report.reportName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Project: ", ctx.report.projectName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("By ", ctx.report.fullName, ", ", ctx.report.createdOn, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.chartOptions !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.percentPassed, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx.numUntested, " / ", ctx.totalResults, " untested (", ctx.percentUntested, "%). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 13, ctx.testRunsMap));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 15, ctx.sectionResultsMap));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.ChartComponent, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_1__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8201:
/*!***************************************************************!*\
  !*** ./src/app/components/project/report/report.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);






function ReportComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "What's a report?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "A report lets you generate statistics and charts for the data in your Test Management System installation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 51)(7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "This project doesn't contain any reports, yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 53)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "No reports have been added to this project yet. You can create or schedule reports for the report templates in the sidebar.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
const _c0 = function (a0) {
  return [a0];
};
function ReportComponent_div_23_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 61)(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "report-", report_r3.reportId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", report_r3.reportId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, "/reports/view/" + report_r3.reportId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](report_r3.reportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", report_r3.reportDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", report_r3.createdOn, " ");
  }
}
function ReportComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 57)(4, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Report Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReportComponent_div_23_tr_14_Template, 12, 8, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.listReport);
  }
}
const _c1 = function (a1) {
  return ["/reports-add", a1];
};
class ReportComponent {
  constructor(route, reportService, datePipe) {
    this.route = route;
    this.reportService = reportService;
    this.datePipe = datePipe;
    this.listReport = [];
    this.projectId = '';
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      console.log(this.projectId);
      this.reportService.findAllByProjectId(parseInt(this.projectId)).subscribe(reports => {
        console.log(reports);
        for (const report of reports) {
          report.createdOn = this.convertDate(report.createdOn);
        }
        this.listReport = reports;
      });
    });
  }
  convertDate(createdOn) {
    if (createdOn === undefined) {
      return '';
    }
    if (!isNaN(Number(createdOn))) {
      createdOn = Number(createdOn) * 1000;
    }
    let date = this.datePipe.transform(createdOn, 'd/M/yyyy, h:mm a');
    if (date == null) {
      return '';
    }
    return date;
  }
  static #_ = this.ɵfac = function ReportComponent_Factory(t) {
    return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_0__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ReportComponent,
    selectors: [["app-report"]],
    decls: 69,
    vars: 10,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["class", "empty empty-with-explanation", "style", "margin-bottom: 2em", 4, "ngIf"], ["id", "private", "class", "report-title", 4, "ngIf"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], ["id", "bulkDeleteDialog", 1, "dialog", "bulk-delete-dialog"], [1, "dialog-title"], [1, "dialog-body"], [1, "top", "bottom", "dialog-message"], [1, "dialog-extra", "text-delete"], [1, "message", "message-delete", "bottom", "delete-confirm-container", "confirm-container"], [1, "checkbox"], [1, "dialog-confirm"], [2, "color", "red"], [1, "dialog-confirm-busy"], ["id", "confirm-check", "type", "checkbox", "value", "1", "name", "deleteCheckbox"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-black", "button-black-disabled", "button-left", "button-positive", "button-disabled", "dialog-action-default"], [1, "button", "button-left", "button-delete", "button-disabled", "button-hidden", "button-no-margin-right", "dialog-action-secondary"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close"], [1, "sidebar-inner"], [1, "sidebar-h1", "top"], [2, "margin-left", "10px"], [1, "grid", "create-report"], [1, "action"], [1, "dark"], [1, "dark", "text-softer"], ["tooltip-text", "Shows a status summary and overview for test runs.", "tooltip-position", "left", 1, "link-noline", "link-tooltip", 3, "routerLink"], [1, "dark", "action-large"], [3, "routerLink"], [1, "icon-add"], [1, "empty", "empty-with-explanation", 2, "margin-bottom", "2em"], [1, "empty-explanation"], [1, "empty-explanation-title"], [1, "empty-explanation-body"], [1, "empty-content", "empty-info"], [1, "empty-title"], [1, "empty-body"], ["id", "private", 1, "report-title"], ["id", "report_914173544"], [1, "select-checkbox"], [1, "grid"], [1, "header", "sectionRow", "caseDroppable"], [2, "width", "60px"], ["class", "odd", 3, "id", 4, "ngFor", "ngForOf"], [1, "odd", 3, "id"], [1, "icon"], [1, "icon-report-10"]],
    template: function ReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ReportComponent_div_22_Template, 12, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ReportComponent_div_23_Template, 15, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 20)(26, "div", 21)(27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 23)(30, "p", 24)(31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Delete all selected reports?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " This action cannnot be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "undone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 26)(38, "div", 27)(39, "label")(40, "span", 28)(41, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Yes, delete all selected Reports (cannot be undone)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "span", 30)(44, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 32)(46, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 36)(52, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Create Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "You can create or schedule reports for the following report templates:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 38)(57, "table", 39)(58, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "col")(60, "col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "tbody")(62, "tr", 41)(63, "td", 42)(64, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Create Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "td", 44)(67, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("projectId", ctx.projectId)("selectedMenu", "reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.listReport && ctx.listReport.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.listReport && ctx.listReport.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx.projectId));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_1__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/report/report.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLE9BQUE7RUFDQSxrRkFBQTtFQUNBLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc2VjdGlvbiA+IGRpdiB7XG4gIGZsZXg6IDE7XG4gIC8qIDEgYW5kIGl0IHdpbGwgZmlsbCB3aG9sZSBzcGFjZSBsZWZ0IGlmIG5vIGZsZXggdmFsdWUgYXJlIHNldCB0byBvdGhlciBjaGlsZHJlbiovXG4gIG92ZXJmbG93OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2363:
/*!********************************************************************************!*\
  !*** ./src/app/components/project/test-run/add-result/add-result.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddResultComponent": () => (/* binding */ AddResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_result_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/result.service */ 5630);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function AddResultComponent_img_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddResultComponent_img_52_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const fileUpload_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openNewTab("/tms-upload/" + fileUpload_r3.uploadedFileName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fileUpload_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/tms-upload/", fileUpload_r3.uploadedFileName, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AddResultComponent_img_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddResultComponent_img_53_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.openNewTab(ctx_r8.getPendingFileURL(i_r7)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const base64_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", base64_r6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AddResultComponent_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddResultComponent_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "background": a0
  };
};
class AddResultComponent {
  constructor(sectionDialog, resultService, toastr, data) {
    this.sectionDialog = sectionDialog;
    this.resultService = resultService;
    this.toastr = toastr;
    this.data = data;
    this.color = '';
    this.result = {
      resultId: 2,
      status: 'Blocked'
    };
    this.pendingUpload = [];
    this.isProcessingFile = false;
    this.isTestRunCompleted = false;
    this.base64Images = [];
  }
  ngOnInit() {
    // this.color =
    this.result.status = this.data.status == 'Untested' ? 'Passed' : this.data.status;
    this.isTestRunCompleted = this.data.isCompleted;
    this.switchColor(this.result.status);
    this.result.resultId = this.data.id;
    if (this.result.resultId) {
      this.resultService.findByResultId(this.result.resultId).subscribe(result => {
        this.result = result;
        this.switchColor(this.result.status);
      });
    }
  }
  close() {
    this.sectionDialog.close();
  }
  switchColor(status) {
    switch (status) {
      case 'Passed':
        this.color = '#338a41';
        break;
      case 'Blocked':
        this.color = '#474747';
        break;
      case 'Retest':
        this.color = '#b99109';
        break;
      case 'Failed':
        this.color = '#a9093a';
        break;
    }
  }
  onChange(e) {
    this.switchColor(e.target.value);
  }
  submit() {
    let formData = new FormData();
    formData.append('result', JSON.stringify(this.result));
    for (let i = 0; i < this.pendingUpload.length; i++) {
      const file = this.pendingUpload[i];
      formData.append('file_' + i, file);
    }
    this.resultService.update(formData).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add result success', 'Success');
        this.close();
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add result failed', 'Error');
      }
    });
  }
  handleFileInput(event) {
    const element = event.currentTarget;
    let fileList = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList);
      this.pendingUpload = [];
      this.isProcessingFile = true;
      let promises = [];
      for (let i = 0; i < fileList.length; i++) {
        promises.push(this.getBase64(fileList[i]));
        this.pendingUpload.push(fileList[i]);
      }
      Promise.all(promises).then(values => {
        this.base64Images = values;
        this.isProcessingFile = false;
      });
    }
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(typeof reader.result);
        if (reader.result instanceof ArrayBuffer || reader.result == null) {
          reject('wrong format file');
        } else {
          resolve(reader.result);
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject(error);
      };
    });
  }
  getPendingFileURL(index) {
    return URL.createObjectURL(this.pendingUpload[index]);
  }
  openNewTab(url) {
    window.open(url);
  }
  static #_ = this.ɵfac = function AddResultComponent_Factory(t) {
    return new (t || AddResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_result_service__WEBPACK_IMPORTED_MODULE_0__.ResultService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AddResultComponent,
    selectors: [["app-add-result"]],
    decls: 67,
    vars: 11,
    consts: [[1, "ui-dialog-titlebar", "ui-widget-header", 2, "background", "rgb(43, 117, 55)", "color", "rgb(255, 255, 255)", "display", "flex", "justify-content", "space-between", "padding", "10px", 3, "ngStyle"], ["id", "ui-dialog-title-addResultDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "addResultDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "height", "386px", "display", "block", "min-height", "0px"], [1, "dialog-title"], [1, "addResult"], ["id", "addResultForm"], [1, "dialog-body", "result-dialog-body", 2, "height", "323px"], [1, "result-dialog-container", "resultContainer", "hidden", 2, "display", "block"], [1, "table"], [1, "column", "result-dialog-column-left"], [1, "form-group"], ["for", "addResultStatus"], [1, "form-required"], ["name", "addResultStatus", "id", "addResultStatus", 1, "form-control", "form-control-small", "form-select", "searchable", "chzn-done", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", "Passed"], ["value", "Blocked"], ["value", "Retest"], ["value", "Failed"], [1, "form-description"], ["for", "comment"], [1, "textarea-resizable"], ["rows", "6", "name", "comment", "id", "comment", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "ngModel", "disabled", "ngModelChange"], [1, "textarea-grippie"], ["for", "screenshot"], ["type", "file", "name", "screenshot", "id", "screenshot", "accept", ".jpg, .jpeg, .png", "multiple", "", 3, "disabled", "change"], ["id", "entityAttachmentList", 1, "dz-persistent"], ["style", "object-fit: contain; width: 190px; height: 190px; cursor: pointer;", 3, "src", "click", 4, "ngFor", "ngForOf"], [1, "dialog-buttons-pane-container"], ["id", "addResultButtons", 1, "button-group", "dialog-buttons-pane", "dialog-buttons-highlighted"], ["type", "button", "id", "addResultSubmit", "class", "button button-left button-positive button-ok button-dark", 3, "click", 4, "ngIf"], ["id", "addResultClose", 1, "button", "button-left", "button-negative", "button-cancel", "button-dark", "dialog-action-close", 3, "click"], [1, "ui-resizable-handle", "ui-resizable-n"], [1, "ui-resizable-handle", "ui-resizable-e"], [1, "ui-resizable-handle", "ui-resizable-s"], [1, "ui-resizable-handle", "ui-resizable-w"], [1, "ui-resizable-handle", "ui-resizable-se", "ui-icon", "ui-icon-gripsmall-diagonal-se", "ui-icon-grip-diagonal-se", 2, "z-index", "1001"], [1, "ui-resizable-handle", "ui-resizable-sw", 2, "z-index", "1002"], [1, "ui-resizable-handle", "ui-resizable-ne", 2, "z-index", "1003"], [1, "ui-resizable-handle", "ui-resizable-nw", 2, "z-index", "1004"], [2, "object-fit", "contain", "width", "190px", "height", "190px", "cursor", "pointer", 3, "src", "click"], ["type", "button", "id", "addResultSubmit", 1, "button", "button-left", "button-positive", "button-ok", "button-dark", 3, "click"]],
    template: function AddResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddResultComponent_Template_span_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddResultComponent_Template_select_ngModelChange_20_listener($event) {
          return ctx.result.status = $event;
        })("change", function AddResultComponent_Template_select_change_20_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Blocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Retest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Set the test status (");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " etc.).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12)(38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22)(41, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddResultComponent_Template_textarea_ngModelChange_41_listener($event) {
          return ctx.result.comment = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Describe your test result.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12)(46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Screenshot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddResultComponent_Template_input_change_48_listener($event) {
          return ctx.handleFileInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Screenshot of your test result.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, AddResultComponent_img_52_Template, 1, 1, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AddResultComponent_img_53_Template, 1, 1, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29)(55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AddResultComponent_button_56_Template, 3, 0, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddResultComponent_Template_a_click_57_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 33)(60, "div", 34)(61, "div", 35)(62, "div", 36)(63, "div", 37)(64, "div", 38)(65, "div", 39)(66, "div", 40);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.isTestRunCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.result.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.isTestRunCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.result.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isProcessingFile || ctx.isTestRunCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.result.fileUploads);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.base64Images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTestRunCompleted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: [".mat-mdc-dialog-container .mdc-dialog__surface {\n  overflow: hidden;\n}\n\n  .mdc-dialog__container {\n  display: block;\n  z-index: 1004;\n  outline: 0px;\n  height: 425px;\n  width: 650px;\n}\n/*# sourceURL=webpack://./src/app/components/project/test-run/add-result/add-result.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3QtcnVuL2FkZC1yZXN1bHQvYWRkLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtbWRjLWRpYWxvZy1jb250YWluZXIgLm1kYy1kaWFsb2dfX3N1cmZhY2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46Om5nLWRlZXAgLm1kYy1kaWFsb2dfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxMDA0O1xuICBvdXRsaW5lOiAwcHg7XG4gIGhlaWdodDogNDI1cHg7XG4gIHdpZHRoOiA2NTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4696:
/*!************************************************************************************!*\
  !*** ./src/app/components/project/test-run/add-test-run/add-test-run.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTestRunComponent": () => (/* binding */ AddTestRunComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mode */ 6337);
/* harmony import */ var _confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-close-dialog/confirm-close-dialog.component */ 8600);
/* harmony import */ var _select_case_dialog_select_case_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-case-dialog/select-case-dialog.component */ 298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_result_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/result.service */ 5630);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);

















function AddTestRunComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function AddTestRunComponent_div_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("R", ctx_r2.testRun.runId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.testRun.runName, " ");
  }
}
function AddTestRunComponent_div_0_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const milestone_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", milestone_r9.milestoneId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", milestone_r9.milestoneName, " ");
  }
}
function AddTestRunComponent_div_0_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", user_r10.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", user_r10.fullname, " ");
  }
}
function AddTestRunComponent_div_0_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "span", 80)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " test cases included (");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddTestRunComponent_div_0_div_82_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "change selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r5.testCasesIdIncluded.length);
  }
}
function AddTestRunComponent_div_0_button_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddTestRunComponent_div_0_button_84_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r6.testRun.runName.trim().length == 0 || !ctx_r6.testRun.projectId);
  }
}
function AddTestRunComponent_div_0_button_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddTestRunComponent_div_0_button_85_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r15.update());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Save Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r7.testRun.runName.trim().length == 0 || !ctx_r7.testRun.projectId);
  }
}
function AddTestRunComponent_div_0_div_115_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Archive this test run to prevent future modifications to its tests and results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 85)(5, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddTestRunComponent_div_0_div_115_ng_template_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Close this test run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function AddTestRunComponent_div_0_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AddTestRunComponent_div_0_div_115_ng_template_1_Template, 7, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r8.currentMode == ctx_r8.Mode.Update);
  }
}
function AddTestRunComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-new-menu-project", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div")(3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "link", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8)(12, "link", 9)(13, "link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, AddTestRunComponent_div_0_div_18_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, AddTestRunComponent_div_0_ng_template_19_Template, 4, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 17)(21, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 20)(24, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AddTestRunComponent_div_0_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.testRun.runName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, " Ex: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Test Run 2014-08-01");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Build 240");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "Version 3.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 26)(41, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 28)(44, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AddTestRunComponent_div_0_Template_select_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.testRun.milestoneId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, AddTestRunComponent_div_0_option_45_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "The milestone this test run belongs to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 31)(49, "div", 32)(50, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Assign To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AddTestRunComponent_div_0_Template_select_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r23.testRun.assignedToId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, AddTestRunComponent_div_0_option_53_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 26)(56, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 36)(59, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AddTestRunComponent_div_0_Template_textarea_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.testRun.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, " Use this description to describe the purpose of this test run. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "input", 40)(64, "input", 41)(65, "input", 42)(66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 43)(68, "div", 44)(69, "label")(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71, "Include all test cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AddTestRunComponent_div_0_Template_input_ngModelChange_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r25.testRun.includeAll = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, " Select this option to include all test cases in this test run. If new test cases are added to the repository, they are also automatically included in this run. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "div", 46)(76, "label")(77, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "Select specific test cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AddTestRunComponent_div_0_Template_input_ngModelChange_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r26.testRun.includeAll = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "You can alternatively select the test cases to include in this test run. New test cases are not automatically added to this run in this case.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, AddTestRunComponent_div_0_div_82_Template, 9, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, AddTestRunComponent_div_0_button_84_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, AddTestRunComponent_div_0_button_85_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddTestRunComponent_div_0_Template_button_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r27.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 52)(89, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, "Select Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "form", 54)(92, "div", 55)(93, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](94, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "div", 60)(98, "div", 61)(99, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100, " OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 65)(105, "div", 66)(106, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](107, " No test case selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, " You can select a different group or change the filters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 69)(111, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](112, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](113, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](115, AddTestRunComponent_div_0_div_115_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("projectId", ctx_r0.testRun.projectId + "")("selectedMenu", "test-runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Create);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Update);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.testRun.runName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.testRun.milestoneId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.milestones);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.testRun.assignedToId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.testRun.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.testRun.includeAll)("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.testRun.includeAll)("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.testRun.includeAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Create);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.currentMode == ctx_r0.Mode.Update);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isActive("CLOSE_TESTRUN") && !ctx_r0.testRun.isCompleted);
  }
}
class AddTestRunComponent {
  constructor(testRunService, router, milestoneService, toastr, userService, location, route, dialog, resultService, testCaseService, authService) {
    this.testRunService = testRunService;
    this.router = router;
    this.milestoneService = milestoneService;
    this.toastr = toastr;
    this.userService = userService;
    this.location = location;
    this.route = route;
    this.dialog = dialog;
    this.resultService = resultService;
    this.testCaseService = testCaseService;
    this.authService = authService;
    this.testRun = {
      runName: 'Test Run ' + this.getToday(),
      projectId: 0,
      includeAll: true
    };
    this.milestones = [];
    this.users = [];
    this.testCasesIdIncluded = [];
    this.currentMode = src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create;
    this.Mode = src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode;
    this.rerunId = '';
    this.projectId = '';
    this.map = new Map();
    this.testCases = [];
    this.oldSelectedTestCase = [];
  }
  ngOnInit() {
    this.currentMode = this.router.url.startsWith('/test-runs-edit/') ? src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Update : src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create;
    // console.log('Current mode: ' + this.currentMode);
    this.route.params.subscribe(params => {
      // console.log(params);
      switch (this.currentMode) {
        case src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create:
          this.testRun.projectId = params['id'];
          this.projectId = params['id'];
          this.rerunId = params['rerun-id'];
          this.getMilestonesByProjectId(this.testRun.projectId);
          break;
        case src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Update:
          this.testRunService.findByTestRunId(params['id']).subscribe(testRun => {
            this.testRun = testRun;
            this.loadCase(this.testRun, this.testRun.projectId);
            this.getMilestonesByProjectId(this.testRun.projectId);
          });
          break;
        default:
          break;
      }
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        // console.log(users);
      });
    });

    this.rerun();
  }
  rerun() {
    if (this.rerunId) {
      this.resultService.findAllByTestRunId(parseInt(this.rerunId)).subscribe(results => {
        var statusData = this.testRunService.getData();
        if (statusData) {
          // console.log(statusData);
          if (statusData && statusData.length < 4) {
            this.testRun.includeAll = false;
          }
          var resultFilter = results.filter(a => statusData.includes(a.status)).map(b => b.caseId);
          // console.log(resultFilter);
          this.testCaseService.findAllByProjectId(+this.projectId).subscribe(testCases => {
            this.testCases = testCases;
            let casetFilter = testCases.filter(a => resultFilter.includes(a.caseId));
            this.testCasesIdIncluded = casetFilter.map(a => a.caseId);
            this.oldSelectedTestCase = casetFilter.map(a => a.caseId);
            // console.log(casetFilter);
          });
        }
      });
    }
  }

  loadCase(testRun, projectId) {
    this.testCaseService.findAllByProjectId(projectId).subscribe(testCases => {
      this.testCases = testCases;
      if (testRun && testRun.results) {
        console.log(new Set(this.testCases.map(a => a.caseId)));
        console.log(new Set(testRun.results.map(a => a.caseId)));
        let selectedCase = [...new Set(testRun.results.map(a => a.caseId))];
        this.testCasesIdIncluded = selectedCase;
        this.oldSelectedTestCase = selectedCase;
        let allCase = [...new Set(this.testCases.map(a => a.caseId))];
        if (selectedCase.every(x => allCase.includes(x)) && selectedCase.length === allCase.length) {
          testRun.includeAll = true;
        } else {
          testRun.includeAll = false;
        }
      }
    });
  }
  getMilestonesByProjectId(projectId) {
    if (!projectId) {
      // console.error('projectId is undefined');
      return;
    }
    this.milestoneService.findAllByProjectId(projectId).subscribe(milestones => {
      this.milestones = milestones;
      // console.log(milestones);
    });
  }

  cancel() {
    this.location.back();
  }
  submit() {
    if (this.testCasesIdIncluded.length) {
      this.testCasesIdIncluded = this.testCasesIdIncluded.map(a => parseInt(a + ''));
      console.log(this.testCasesIdIncluded);
      let results = this.testCasesIdIncluded.map(caseId => ({
        caseId: caseId
      }));
      this.testRun.testRunResults = results;
      console.log("acccccccccccc");
      console.log(results);
      console.log("aaaaaaaaaaaaaaa");
      console.log(this.testRun);
    }
    this.testRunService.create(this.testRun).subscribe({
      next: res => {
        // console.log(res);
        this.toastr.success('Add test run success', 'Success');
        this.router.navigateByUrl('/test-runs/' + this.testRun.projectId);
      },
      error: e => {
        // console.log(e);
        this.toastr.error('Add test run failed', 'Error');
      }
    });
  }
  getToday() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let result;
    if (dd < 10) {
      result = '0' + dd;
    } else {
      result = '' + dd;
    }
    result += '/';
    if (mm < 10) {
      result += '0' + mm;
    } else {
      result += '' + mm;
    }
    return result + '/' + yyyy;
  }
  openDialog() {
    const dialogRef = this.dialog.open(_select_case_dialog_select_case_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SelectCaseDialogComponent, {
      data: {
        id: this.testRun.projectId,
        test_cases_ids: this.testCasesIdIncluded,
        old_test_cases: this.oldSelectedTestCase
      }
    }).afterClosed().subscribe(result => {
      if (result && result.event != 'Cancel' && result.data) {
        this.oldSelectedTestCase = [...result.data];
        this.testCasesIdIncluded = [...result.data];
      }
      // console.log(this.testCasesIdIncluded);
    });
  }

  close() {
    this.dialog.open(_confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmCloseDialogComponent).afterClosed().subscribe(result => {
      if (result && result.event == 'Close') {
        this.testRun.isCompleted = true;
        this.update();
      }
    });
  }
  update() {
    if (this.testCasesIdIncluded.length) {
      this.testCasesIdIncluded = this.testCasesIdIncluded.map(a => parseInt(a + ''));
      console.log(this.testCasesIdIncluded);
      let results = this.testCasesIdIncluded.map(caseId => ({
        caseId: caseId
      }));
      this.testRun.results = results;
      console.log("acccccccccccc");
      console.log(results);
      console.log("aaaaaaaaaaaaaaa");
      console.log(this.testRun);
    }
    this.testRunService.update(this.testRun).subscribe({
      next: res => {
        // console.log(res);
        this.toastr.success('Update test run success', 'Success');
        this.router.navigateByUrl('/test-runs/' + this.testRun.projectId);
      },
      error: e => {
        // console.log(e);
        this.toastr.error('Update test run failed', 'Error');
      }
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function AddTestRunComponent_Factory(t) {
    return new (t || AddTestRunComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_3__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_4__.MilestoneService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_result_service__WEBPACK_IMPORTED_MODULE_6__.ResultService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_7__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: AddTestRunComponent,
    selectors: [["app-add-test-run"]],
    decls: 1,
    vars: 1,
    consts: [["style", "display: flex; height: 100%;", 4, "ngIf"], [2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], ["class", "content-header-title page_title", 4, "ngIf"], [3, "ngIf"], ["id", "content-inner", 1, "content-inner"], ["action", "index.php?/runs/add/2", "id", "form", "method", "post"], ["type", "hidden", "name", "_token", "value", "kyqRSAYnPxiKjL7HwuCW"], [1, "form-group", "form-group-main"], ["for", "name"], [1, "form-required"], ["type", "text", "name", "name", "id", "name", "maxlength", "250", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-description"], [1, "form-separator"], [1, "form-group"], ["for", "milestone_id"], [1, "dropdown-size"], ["name", "milestone_id", "id", "milestone_id", 1, "form-control", "form-control-full", "form-select", "searchable", "chzn-done", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "searchable-wrapper"], [1, "form-group", "dropdown-size"], ["for", "assignedto_id"], ["name", "user_id", "id", "user_id", 1, "form-control", "form-control-full", "form-select", "searchable", "chzn-done", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["for", "description"], [1, "textarea-resizable"], ["rows", "6", "name", "description", "id", "description", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "ngModel", "ngModelChange"], [1, "textarea-grippie"], [1, "form-description", "form-description-full"], ["type", "hidden", "id", "case_ids", "name", "case_ids", "value", "", 1, "dirty-trackable"], ["type", "hidden", "id", "rerun_id", "name", "rerun_id", "value", "0"], ["type", "hidden", "id", "copy_assignedto", "name", "copy_assignedto", "value", ""], [1, "form-group", "form-control-default"], [1, "radio", 2, "margin-bottom", "15px"], ["type", "radio", "name", "include_all", "id", "includeAll", "checked", "checked", 1, "radio", 3, "ngModel", "value", "ngModelChange"], [1, "radio"], ["type", "radio", "name", "include_all", "id", "includeSpecific", 1, "radio", 3, "ngModel", "value", "ngModelChange"], ["id", "includeSpecificContainer", "style", "margin-top: 5px; margin-left: 20px; padding-bottom: 15px;", 4, "ngIf"], [1, "button-group", "form-buttons"], ["id", "accept", "class", "button button-left button-positive button-ok", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "button", "button-left", "button-negative", "button-cancel", "run-form-cancel", 3, "click"], ["id", "selectCasesDialog", 1, "dialog", 2, "width", "850px", "height", "700px"], [1, "dialog-title"], ["id", "selectCasesForm"], [1, "dialog-body", 2, "padding", "0"], ["id", "selectCasesContainer", 1, "select-dialog-container"], ["id", "selectCasesContent", 1, "select-dialog-content", 2, "display", "none"], ["id", "selectCasesProgress", 1, "select-dialog-progress"], ["title", "Loading...", 1, "icon-progress-large"], [1, "dialog-buttons-pane-container"], [1, "button-group", "dialog-buttons-highlighted"], ["id", "selectCasesSubmit", "type", "submit", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default"], ["id", "selectCasesClose", 1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close"], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], ["class", "sidebar-inner", 4, "ngIf"], [1, "content-header-title", "page_title"], [1, "content-header-id"], [3, "value"], ["id", "includeSpecificContainer", 2, "margin-top", "5px", "margin-left", "20px", "padding-bottom", "15px"], [1, "form-message"], ["id", "includeSpecificInfo"], [2, "color", "#5993bc", "text-decoration", "none", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["id", "accept", "type", "button", 1, "button", "button-left", "button-positive", "button-ok", 3, "disabled", "click"], [1, "sidebar-inner"], [1, "sidebar-h1", "top"], [1, "sidebar-action"], ["type", "button", 1, "button", "button-close", 2, "padding", "0 8px 0 8px", 3, "click"]],
    template: function AddTestRunComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, AddTestRunComponent_div_0_Template, 116, 18, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_TESTRUN"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_9__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/test-run/add-test-run/add-test-run.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3QtcnVuL2FkZC10ZXN0LXJ1bi9hZGQtdGVzdC1ydW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLE9BQUE7RUFDQSxrRkFBQTtFQUNBLGNBQUE7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc2VjdGlvbiA+IGRpdiB7XG4gIGZsZXg6IDE7XG4gIC8qIDEgYW5kIGl0IHdpbGwgZmlsbCB3aG9sZSBzcGFjZSBsZWZ0IGlmIG5vIGZsZXggdmFsdWUgYXJlIHNldCB0byBvdGhlciBjaGlsZHJlbiovXG4gIG92ZXJmbG93OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 298:
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project/test-run/add-test-run/select-case-dialog/select-case-dialog.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCaseDialogComponent": () => (/* binding */ SelectCaseDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);







function SelectCaseDialogComponent_div_21_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 59)(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 44)(4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SelectCaseDialogComponent_div_21_tr_40_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onSelectCase($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "td", 53)(12, "td", 53)(13, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const testCase_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", testCase_r3.caseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", testCase_r3.caseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "testcase-", testCase_r3.caseId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", testCase_r3.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", testCase_r3.caseId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](testCase_r3.caseName);
  }
}
function SelectCaseDialogComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 42)(11, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "col", 43)(13, "col", 44)(14, "col", 45)(15, "col")(16, "col", 46)(17, "col", 47)(18, "col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody")(20, "tr", 49)(21, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 44)(24, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectCaseDialogComponent_div_21_Template_input_click_24_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const section_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onSelectAll($event, section_r1.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th")(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th")(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "th", 53)(34, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 54)(36, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SelectCaseDialogComponent_div_21_tr_40_Template, 14, 6, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](section_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](section_r1.value.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", section_r1.value);
  }
}
class SelectCaseDialogComponent {
  constructor(sectionDialog, testCaseService, data, document) {
    this.sectionDialog = sectionDialog;
    this.testCaseService = testCaseService;
    this.data = data;
    this.selectedTestCases = [];
    this.testCases = [];
    this.map = new Map();
    this.action = '';
  }
  ngOnInit() {
    this.testCaseService.findAllByProjectId(+this.data.id).subscribe(testCases => {
      this.testCases = testCases;
      this.map = new Map();
      for (const testCase of testCases) {
        if (!testCase.sectionName) continue;
        let testCases = this.map.get(testCase.sectionName);
        if (!testCases) {
          this.map.set(testCase.sectionName, [testCase]);
        } else {
          testCases.push(testCase);
        }
        console.log(this.data.test_cases_ids);
        console.log('==============');
        console.log(this.data.old_test_cases);
        if (this.data.test_cases_ids && this.data.old_test_cases) {
          this.data.old_test_cases.forEach(a => {
            this.selectedTestCases.push(a);
          });
          testCase.isSelected = this.data.test_cases_ids.includes(testCase.caseId + '') || this.data.test_cases_ids.includes(testCase.caseId);
        }
      }
    });
  }
  onSelectCase(event) {
    if (event.target.checked) {
      if (this.selectedTestCases.indexOf(event.target.value) < 0) {
        this.selectedTestCases.push(event.target.value);
      }
    } else {
      if (this.selectedTestCases.indexOf(event.target.value) > -1) {
        this.selectedTestCases.splice(this.selectedTestCases.indexOf(event.target.value), 1);
      }
    }
    console.log(this.selectedTestCases);
  }
  onSelectAll(event, section_value) {
    let arrayTemp = [];
    for (const testCase of section_value) {
      if (testCase.caseId) {
        arrayTemp.push(testCase.caseId);
      }
    }
    if (event.target.checked) {
      this.selectedTestCases = arrayTemp;
      arrayTemp.forEach(a => {
        let checkbox = document.getElementById('testcase-' + a);
        checkbox.checked = true;
      });
    } else {
      this.selectedTestCases = [];
      arrayTemp.forEach(a => {
        let checkbox = document.getElementById('testcase-' + a);
        checkbox.checked = false;
      });
    }
    console.log(this.selectedTestCases);
  }
  submit() {
    if ([...new Set(this.selectedTestCases)].every(x => this.data.old_test_cases.includes(x)) && this.selectedTestCases.length == this.data.old_test_cases.length && this.data.old_test_cases.length > 0) {
      this.sectionDialog.close({
        event: '',
        data: this.data.old_test_cases
      });
    } else {
      console.log([...new Set(this.selectedTestCases)]);
      this.sectionDialog.close({
        event: '',
        data: [...new Set(this.selectedTestCases)]
      });
    }
  }
  close() {
    this.sectionDialog.close({
      event: 'Cancel'
    });
  }
  static #_ = this.ɵfac = function SelectCaseDialogComponent_Factory(t) {
    return new (t || SelectCaseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SelectCaseDialogComponent,
    selectors: [["app-select-case-dialog"]],
    decls: 40,
    vars: 3,
    consts: [["role", "dialog", "id", "dialog-ident-selectCasesDialog", "aria-labelledby", "ui-dialog-title-selectCasesDialog", "tabindex", "-1", 1, "ui-dialog", 2, "height", "auto", "width", "850px", "display", "block", "z-index", "1002", "outline", "0px", "position", "inherit !important"], [1, "ui-dialog-titlebar", "ui-widget-header", 2, "display", "flex", "justify-content", "space-between", "padding", "10px"], ["id", "ui-dialog-title-selectCasesDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "selectCasesDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "height", "661px", "display", "block", "min-height", "0px"], [1, "dialog-title"], ["id", "selectCasesForm"], [1, "dialog-body", 2, "padding", "0px", "height", "602px"], ["id", "selectCasesContainer", 1, "select-dialog-container"], ["id", "selectCasesContent", 1, "select-dialog-content"], ["type", "hidden", "name", "can_move", "id", "can_move", "value", "1"], [1, "select-dialog-column", "select-dialog-column-main-container"], ["id", "selectCasesMain", "min-width", "400", 1, "select-dialog-column", "select-dialog-column-main"], ["id", "selectCasesSplitter1", "name", "splitter1", 1, "select-dialog-column", "select-dialog-column-splitter"], [1, "select-dialog-scroll"], ["id", "selectCasesGroupContainer", 1, "select-dialog-group", "select-dialog-group-with-splitter", 2, "min-width", "350px"], ["id", "selectCasesGroup"], ["id", "section-4", "rel", "4", "class", "group grid-container", 4, "ngFor", "ngForOf"], [1, "clear"], ["id", "selectCasesProgress", 1, "select-dialog-progress", 2, "display", "none", "padding-top", "241px"], ["title", "Loading...", 1, "icon-progress-large"], [1, "dialog-buttons-pane-container"], [1, "button-group", "dialog-buttons-highlighted"], ["id", "selectCasesSubmit", "type", "submit", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default", 3, "click"], ["id", "selectCasesClose", 1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"], [1, "ui-resizable-handle", "ui-resizable-n"], [1, "ui-resizable-handle", "ui-resizable-e"], [1, "ui-resizable-handle", "ui-resizable-s"], [1, "ui-resizable-handle", "ui-resizable-w"], [1, "ui-resizable-handle", "ui-resizable-se", "ui-icon", "ui-icon-gripsmall-diagonal-se", "ui-icon-grip-diagonal-se", 2, "z-index", "1001"], [1, "ui-resizable-handle", "ui-resizable-sw", 2, "z-index", "1002"], [1, "ui-resizable-handle", "ui-resizable-ne", 2, "z-index", "1003"], [1, "ui-resizable-handle", "ui-resizable-nw", 2, "z-index", "1004"], ["id", "section-4", "rel", "4", 1, "group", "grid-container"], [1, "grid-title"], ["id", "sectionName-4", 1, "title"], ["id", "sectionCount-4", 1, "text-secondary", "section-count"], ["id", "sectionBusy-4", 1, "busy", 2, "display", "none"], [1, "icon-progress-inline"], ["id", "sectionDesc-4", 1, "hidden", "remove_scroll_add_margin", "scroll-auto"], [1, "scroll-auto-inner", "markdown"], ["id", "grid-4", 1, "grid", 2, "margin-bottom", "0.75em"], [1, "drag-no"], [1, "checkbox"], [2, "width", "65px"], [1, "action-edit"], [1, "action-delete"], [1, "action", "columns"], [1, "header", "sectionRow", "caseDroppable"], [1, "icon-dragnoblue"], ["type", "checkbox", 1, "selectionCheckbox", 3, "click"], [1, "column-actions"], [1, "action"], ["id", "selectColumns-4", 1, "action", "columns"], [1, "select"], [1, "icon-columns"], [1, "busy"], ["class", "caseRow row odd caseDroppable ", 4, "ngFor", "ngForOf"], [1, "caseRow", "row", "odd", "caseDroppable"], [1, "drag"], [1, "caseDraggable", "dragdrop-action"], ["type", "checkbox", 1, "selectionCheckbox", 3, "value", "name", "id", "checked", "change"], [1, "id"], ["title", "Test Case Deleted", 1, "case-deleted", "case-deleted-hidden"], [1, "title"]],
    template: function SelectCaseDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectCaseDialogComponent_Template_span_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Select Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SelectCaseDialogComponent_div_21_Template, 41, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22)(27, "div", 23)(28, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectCaseDialogComponent_Template_button_click_28_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " OK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectCaseDialogComponent_Template_button_click_30_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 26)(33, "div", 27)(34, "div", 28)(35, "div", 29)(36, "div", 30)(37, "div", 31)(38, "div", 32)(39, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 1, ctx.map));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe],
    styles: [".mat-mdc-dialog-container .mdc-dialog__surface {\n  overflow: hidden;\n}\n/*# sourceURL=webpack://./src/app/components/project/test-run/add-test-run/select-case-dialog/select-case-dialog.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3QtcnVuL2FkZC10ZXN0LXJ1bi9zZWxlY3QtY2FzZS1kaWFsb2cvc2VsZWN0LWNhc2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LW1kYy1kaWFsb2ctY29udGFpbmVyIC5tZGMtZGlhbG9nX19zdXJmYWNlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8600:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/project/test-run/confirm-close-dialog/confirm-close-dialog.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmCloseDialogComponent": () => (/* binding */ ConfirmCloseDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);


class ConfirmCloseDialogComponent {
  constructor(confirmClose) {
    this.confirmClose = confirmClose;
  }
  submit() {
    this.confirmClose.close({
      event: 'Close'
    });
  }
  close() {
    this.confirmClose.close({
      event: 'Cancel'
    });
  }
  static #_ = this.ɵfac = function ConfirmCloseDialogComponent_Factory(t) {
    return new (t || ConfirmCloseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmCloseDialogComponent,
    selectors: [["app-confirm-close-dialog"]],
    decls: 18,
    vars: 0,
    consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "ui-dialog-title-confirmDialog", "id", "dialog-ident-confirmDialog", 1, "ui-dialog", 2, "display", "block", "z-index", "1004", "outline", "0px", "height", "auto", "width", "350px", "position", "inherit !important"], [1, "ui-dialog-titlebar", "ui-widget-header", "ui-corner-all", "ui-helper-clearfix"], ["id", "ui-dialog-title-confirmDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "confirmDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "display", "block", "min-height", "0px", "height", "auto"], [1, "dialog-title"], [1, "dialog-body"], [1, "dialog-message", 2, "margin", "0"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-ok", "button-left", "button-positive", "dialog-action-default", 3, "click"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close", 3, "click"]],
    template: function ConfirmCloseDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmCloseDialogComponent_Template_span_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Really close this test run? This operation cannot be undone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmCloseDialogComponent_Template_a_click_14_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmCloseDialogComponent_Template_a_click_16_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7240:
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/test-run/detail-test-run/detail-test-run.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailTestRunComponent": () => (/* binding */ DetailTestRunComponent)
/* harmony export */ });
/* harmony import */ var _add_result_add_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-result/add-result.component */ 2363);
/* harmony import */ var _confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-close-dialog/confirm-close-dialog.component */ 8600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var src_app_services_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/result.service */ 5630);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 3239);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);














const _c0 = ["statusDropdown"];
const _c1 = ["button"];
function DetailTestRunComponent_apx_chart_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "apx-chart", 46, 47);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("colors", ctx_r0.chartOptions.colors);
  }
}
function DetailTestRunComponent_div_46_tr_25_button_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 72);
  }
}
const _c2 = function (a0) {
  return {
    "cursor": a0
  };
};
function DetailTestRunComponent_div_46_tr_25_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailTestRunComponent_div_46_tr_25_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.openDialog(result_r7.status, result_r7.resultId, ctx_r15.isCompleted));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailTestRunComponent_div_46_tr_25_button_7_span_3_Template, 1, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, !ctx_r8.isActive("ADD_RESULT") ? "unset" : "pointer"))("disabled", ctx_r8.isCompleted || !ctx_r8.isActive("ADD_RESULT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", result_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.isActive("ADD_RESULT"));
  }
}
function DetailTestRunComponent_div_46_tr_25_button_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 72);
  }
}
function DetailTestRunComponent_div_46_tr_25_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 73, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailTestRunComponent_div_46_tr_25_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.openDialog(result_r7.status, result_r7.resultId, ctx_r21.isCompleted));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailTestRunComponent_div_46_tr_25_button_8_span_3_Template, 1, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, !ctx_r9.isActive("ADD_RESULT") ? "unset" : "pointer"))("disabled", !ctx_r9.isActive("ADD_RESULT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", result_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.isActive("ADD_RESULT"));
  }
}
function DetailTestRunComponent_div_46_tr_25_button_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 72);
  }
}
function DetailTestRunComponent_div_46_tr_25_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 74, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailTestRunComponent_div_46_tr_25_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.openDialog(result_r7.status, result_r7.resultId, ctx_r27.isCompleted));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailTestRunComponent_div_46_tr_25_button_9_span_3_Template, 1, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, !ctx_r10.isActive("ADD_RESULT") ? "unset" : "pointer"))("disabled", !ctx_r10.isActive("ADD_RESULT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", result_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.isActive("ADD_RESULT"));
  }
}
function DetailTestRunComponent_div_46_tr_25_button_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 72);
  }
}
function DetailTestRunComponent_div_46_tr_25_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 75, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailTestRunComponent_div_46_tr_25_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.openDialog(result_r7.status, result_r7.resultId, ctx_r33.isCompleted));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailTestRunComponent_div_46_tr_25_button_10_span_3_Template, 1, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, !ctx_r11.isActive("ADD_RESULT") ? "unset" : "pointer"))("disabled", !ctx_r11.isActive("ADD_RESULT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", result_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.isActive("ADD_RESULT"));
  }
}
function DetailTestRunComponent_div_46_tr_25_button_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 72);
  }
}
function DetailTestRunComponent_div_46_tr_25_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 76, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailTestRunComponent_div_46_tr_25_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r39.openDialog(result_r7.status, result_r7.resultId, ctx_r39.isCompleted));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailTestRunComponent_div_46_tr_25_button_11_span_3_Template, 1, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, !ctx_r12.isActive("ADD_RESULT") ? "unset" : "pointer"))("disabled", !ctx_r12.isActive("ADD_RESULT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", result_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.isActive("ADD_RESULT"));
  }
}
function DetailTestRunComponent_div_46_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 61)(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DetailTestRunComponent_div_46_tr_25_button_7_Template, 4, 6, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DetailTestRunComponent_div_46_tr_25_button_8_Template, 4, 6, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DetailTestRunComponent_div_46_tr_25_button_9_Template, 4, 6, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DetailTestRunComponent_div_46_tr_25_button_10_Template, 4, 6, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, DetailTestRunComponent_div_46_tr_25_button_11_Template, 4, 6, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "row-", result_r7.resultId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", result_r7.resultId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", result_r7.caseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", result_r7.status == "Untested");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", result_r7.status == "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", result_r7.status == "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", result_r7.status == "Retest");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", result_r7.status == "Failed");
  }
}
function DetailTestRunComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "table", 56)(11, "tbody")(12, "tr", 57)(13, "th")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th")(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th")(23, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, DetailTestRunComponent_div_46_tr_25_Template, 12, 8, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](section_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](section_r5.value.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", section_r5.value);
  }
}
function DetailTestRunComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Archive this test run to prevent future modifications to its tests and results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 78)(6, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailTestRunComponent_div_58_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Close this test run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
const _c3 = function (a0, a1) {
  return {
    "top": a0,
    "left": a1,
    "width": "175px",
    "display": "block",
    "position": "absolute"
  };
};
function DetailTestRunComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80, 81)(2, "ul")(3, "li")(4, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li")(9, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "li")(14, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Retest");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "li")(19, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](1, _c3, ctx_r3.top, ctx_r3.left));
  }
}
class DetailTestRunComponent {
  constructor(dialog, route, testRunService, resultService, router, toastr, authService) {
    this.dialog = dialog;
    this.route = route;
    this.testRunService = testRunService;
    this.resultService = resultService;
    this.router = router;
    this.toastr = toastr;
    this.authService = authService;
    this.numUntested = 0;
    this.percentPassed = '0';
    this.percentUntested = '0';
    this.projectId = '';
    this.testRunId = '';
    this.testRunName = '';
    this.createDate = '';
    this.isCompleted = false;
    this.results = [];
    this.map = new Map();
    this.top = '';
    this.left = '';
    this.testRun = {
      runId: this.testRunId,
      runName: ''
    };
    this.isMenuOpen = false;
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      this.testRunId = params['subId'];
      console.log(this.projectId);
      console.log(this.testRunId);
      this.refreshResult(parseInt(this.testRunId));
      this.testRunService.findByTestRunId(parseInt(this.testRunId)).subscribe(results => {
        this.testRun = results;
        this.testRunName = results.runName;
        this.isCompleted = results.isCompleted ? results.isCompleted : false;
        this.createDate = results.createdOn ? results.createdOn[2] + '/' + results.createdOn[1] + '/' + results.createdOn[0] : '';
      });
    });
    // document.addEventListener('click', (e) => {
    //   if (e.target instanceof Element) {
    //     if (!e.target.className.startsWith('custom-dropdown')) {
    //       this.top = '';
    //       this.left = '';
    //     }
    //   }
    // });
  }

  refreshResult(testRunId) {
    this.resultService.findAllByTestRunId(testRunId).subscribe(results => {
      this.results = results;
      this.chartOptions = {
        series: [0, 0, 0, 0, 0],
        chart: {
          width: 390,
          type: "pie",
          height: 260
        },
        labels: ["Passed", "Blocked", "Retest", "Failed", "Untested"],
        colors: ['#338a41', '#474747', '#b99109', '#a9093a', '#737373']
      };
      this.numUntested = 0;
      for (const result of results) {
        switch (result.status) {
          case "Passed":
            this.chartOptions.series[0]++;
            break;
          case "Blocked":
            this.chartOptions.series[1]++;
            break;
          case "Retest":
            this.chartOptions.series[2]++;
            break;
          case "Failed":
            this.chartOptions.series[3]++;
            break;
          case "Untested":
            this.chartOptions.series[4]++;
            this.numUntested++;
            break;
          default:
            break;
        }
      }
      this.percentUntested = (this.numUntested / this.results.length * 100).toFixed(1);
      this.percentPassed = (this.chartOptions.series[0] / this.results.length * 100).toFixed(1);
      this.map = new Map();
      for (const result of results) {
        if (!result.sectionName) continue;
        let tempResults = this.map.get(result.sectionName);
        if (!tempResults) {
          this.map.set(result.sectionName, [result]);
        } else {
          tempResults.push(result);
        }
      }
    });
  }
  openDialog(status, id, isCompleted) {
    console.log('here');
    const dialogRef = this.dialog.open(_add_result_add_result_component__WEBPACK_IMPORTED_MODULE_0__.AddResultComponent, {
      data: {
        status: status,
        id: id,
        isCompleted: isCompleted
      }
    }).afterClosed().subscribe(_ => {
      this.refreshResult(parseInt(this.testRunId));
    });
  }
  openDropDown(e) {
    var target = e.target || e.srcElement || e.currentTarget;
    console.log(target.getBoundingClientRect());
    this.left = target.getBoundingClientRect()['x'] + 'px';
    this.top = target.getBoundingClientRect()['y'] + 24 + 'px';
    console.log(this.isMenuOpen);
    console.log(this.top);
    console.log(this.left);
  }
  update() {
    this.testRunService.update(this.testRun).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Update test run success', 'Success');
        this.router.navigateByUrl('/test-runs/' + this.testRun.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Update test run failed', 'Error');
      }
    });
  }
  close() {
    this.dialog.open(_confirm_close_dialog_confirm_close_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmCloseDialogComponent).afterClosed().subscribe(result => {
      if (result && result.event == 'Close') {
        this.testRun.isCompleted = true;
        // this.testRun.runId = this.testRunId;
        // this.testRun.projectId = parseInt(this.projectId);
        this.update();
      }
    });
  }
  static #_ = this.ɵfac = function DetailTestRunComponent_Factory(t) {
    return new (t || DetailTestRunComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_2__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_result_service__WEBPACK_IMPORTED_MODULE_3__.ResultService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DetailTestRunComponent,
    selectors: [["app-detail-test-run"]],
    viewQuery: function DetailTestRunComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.statusDropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
      }
    },
    decls: 60,
    vars: 15,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "notificationbar", 1, "notificationbar", "notificationbar-hidden"], [1, "notificationbar", "notificationbar-local"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-id"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner"], ["id", "statsContainer"], ["rel", "4", 1, "chart-pie"], ["id", "tablechart_testun", 1, "table-extended", 2, "height", "100%"], ["id", "statusChartContainer", 2, "padding", "0", "height", "100%"], ["id", "chart"], [3, "series", "chart", "labels", "colors", 4, "ngIf"], [1, "column", "chart-pie-column-percent"], [1, "chart-pie-percent", 2, "padding-top", "5em"], [1, "chart-pie-percent-title"], [1, "chart-pie-percent-description"], [1, "chart-pie-percent-note", "text-secondary", 2, "line-height", "130%"], ["download", "TestRail-stats-1-20230107092820.png", "href", "#", "id", "dl", "hidden", ""], ["id", "content_container"], ["id", "groupContainer", 2, "margin-top", "1.5em", "display", "block"], ["id", "groupContent"], ["id", "groups"], ["id", "section-4", "rel", "4", "class", "group grid-container", 4, "ngFor", "ngForOf"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], [1, "sidebar-inner"], [2, "margin", "0"], [1, "sidebar-menu"], [1, "sidebar-menu-item", "sidebar-menu-item-first", "sidebar-menu-item-selected"], ["id", "navigation-runs-testsresults"], ["class", "sidebar-inner", 4, "ngIf"], ["id", "statusDropdown", "class", "dropdown dropdown-menu", 3, "ngStyle", 4, "ngIf"], [3, "series", "chart", "labels", "colors"], ["chart", ""], ["id", "section-4", "rel", "4", 1, "group", "grid-container"], [1, "grid-title"], ["id", "sectionName-4", 1, "title"], ["id", "sectionCount-4", 1, "text-secondary", "section-count"], ["id", "sectionBusy-4", 1, "busy", 2, "display", "none"], [1, "icon-progress-inline"], ["id", "sectionDesc-4", 1, "hidden", "remove_scroll_add_margin", "scroll-auto"], [1, "scroll-auto-inner", "markdown"], ["id", "grid-4", 1, "grid", 2, "margin-bottom", "0.75em"], [1, "header"], [1, "column-actions"], [1, "hidden-xs", 2, "float", "right"], ["class", "row odd", 3, "id", 4, "ngFor", "ngForOf"], [1, "row", "odd", 3, "id"], [1, "id"], ["rel", "4", 1, "js-status"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #737373; color: #ffffff", 3, "ngStyle", "disabled", "click", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #338a41; color: #ffffff", 3, "ngStyle", "disabled", "click", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #474747; color: #ffffff", 3, "ngStyle", "disabled", "click", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #b99109; color: #ffffff", 3, "ngStyle", "disabled", "click", 4, "ngIf"], ["class", "dropdownLink status hidden-xs", "style", "border: unset; float: right; background: #a9093a; color: #ffffff", 3, "ngStyle", "disabled", "click", 4, "ngIf"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#737373", "color", "#ffffff", 3, "ngStyle", "disabled", "click"], ["button", ""], ["class", "caret button-caret", 4, "ngIf"], [1, "caret", "button-caret"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#338a41", "color", "#ffffff", 3, "ngStyle", "disabled", "click"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#474747", "color", "#ffffff", 3, "ngStyle", "disabled", "click"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#b99109", "color", "#ffffff", 3, "ngStyle", "disabled", "click"], [1, "dropdownLink", "status", "hidden-xs", 2, "border", "unset", "float", "right", "background", "#a9093a", "color", "#ffffff", 3, "ngStyle", "disabled", "click"], [1, "sidebar-h1", "top"], [1, "sidebar-action"], ["type", "button", 1, "button", "button-close", 2, "padding", "0 8px 0 8px", 3, "click"], ["id", "statusDropdown", 1, "dropdown", "dropdown-menu", 3, "ngStyle"], ["statusDropdown", ""], [1, "dropdown-menu-link"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#338a41"], [1, "dropdown-menu-separator"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#474747"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#b99109"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#a9093a"]],
    template: function DetailTestRunComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "div", 22)(29, "div", 23)(30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, DetailTestRunComponent_apx_chart_31_Template, 2, 4, "apx-chart", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 26)(33, "div", 27)(34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "download image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 32)(43, "div", 33)(44, "div", 34)(45, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, DetailTestRunComponent_div_46_Template, 26, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 38)(50, "div", 39)(51, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 41)(54, "ul")(55, "li", 42)(56, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, " Tests & Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, DetailTestRunComponent_div_58_Template, 8, 0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, DetailTestRunComponent_div_59_Template, 22, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("projectId", ctx.projectId)("selectedMenu", "test-runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.testRunId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.testRunName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chartOptions !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.percentPassed, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", ctx.numUntested, " / ", ctx.results.length, " untested (", ctx.percentUntested, "%). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 13, ctx.map));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Created on ", ctx.createDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isActive("CLOSE_TESTRUN") && !ctx.isCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.top && ctx.left);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.ChartComponent, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_5__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.KeyValuePipe],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/test-run/detail-test-run/detail-test-run.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3QtcnVuL2RldGFpbC10ZXN0LXJ1bi9kZXRhaWwtdGVzdC1ydW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLE9BQUE7RUFDQSxrRkFBQTtFQUNBLGNBQUE7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc2VjdGlvbiA+IGRpdiB7XG4gIGZsZXg6IDE7XG4gIC8qIDEgYW5kIGl0IHdpbGwgZmlsbCB3aG9sZSBzcGFjZSBsZWZ0IGlmIG5vIGZsZXggdmFsdWUgYXJlIHNldCB0byBvdGhlciBjaGlsZHJlbiovXG4gIG92ZXJmbG93OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3748:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/project/test-run/detail-test-run/status-dropdown/status-dropdown.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusDropdownComponent": () => (/* binding */ StatusDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StatusDropdownComponent {
  static #_ = this.ɵfac = function StatusDropdownComponent_Factory(t) {
    return new (t || StatusDropdownComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatusDropdownComponent,
    selectors: [["app-status-dropdown"]],
    decls: 21,
    vars: 0,
    consts: [["id", "statusDropdown", 1, "dropdown", "dropdown-menu", 2, "width", "175px", "left", "1497px", "top", "556.188px", "display", "block"], [1, "dropdown-menu-link"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#338a41"], [1, "dropdown-menu-separator"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#474747"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#b99109"], [1, "status-mini", 2, "float", "left", "margin", "1px 5px 0 0", "background", "#a9093a"]],
    template: function StatusDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li")(3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Retest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1547:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/project/test-run/detail-test-run/status-select/status-select.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusSelectComponent": () => (/* binding */ StatusSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StatusSelectComponent {
  static #_ = this.ɵfac = function StatusSelectComponent_Factory(t) {
    return new (t || StatusSelectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatusSelectComponent,
    selectors: [["app-status-select"]],
    decls: 2,
    vars: 0,
    template: function StatusSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status-select works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7299:
/*!************************************************************************************!*\
  !*** ./src/app/components/project/test-run/rerun-dialog/rerun-dialog.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RerunDialogComponent": () => (/* binding */ RerunDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function RerunDialogComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "label")(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RerunDialogComponent_div_25_Template_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const status_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.select(status_r1.status));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const status_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "rerunStatuses-", status_r1.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", status_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", status_r1.isSelected);
  }
}
class RerunDialogComponent {
  constructor(testRunService, rerunDialog, router, data) {
    this.testRunService = testRunService;
    this.rerunDialog = rerunDialog;
    this.router = router;
    this.data = data;
    this.selectedStatus = new Set();
    this.statusArray = [{
      status: 'Passed',
      isSelected: false
    }, {
      status: 'Blocked',
      isSelected: false
    }, {
      status: 'Retest',
      isSelected: false
    }, {
      status: 'Failed',
      isSelected: false
    }];
  }
  submit() {
    this.testRunService.setData([...this.selectedStatus]);
    // test-runs-add/:id/rerun/:rerun-id
    this.rerunDialog.close();
    this.router.navigateByUrl('/test-runs-add/' + this.data.projectId + '/rerun/' + this.data.testrunId);
  }
  close() {
    this.rerunDialog.close({
      event: ''
    });
  }
  select(status) {
    this.selectedStatus.add(status);
  }
  selectAll() {
    this.selectedStatus = new Set(this.statusArray.map(a => a.status));
    this.statusArray.forEach(a => a.isSelected = true);
    console.log(this.statusArray);
  }
  clearAll() {
    this.selectedStatus = new Set();
    this.statusArray.forEach(a => a.isSelected = false);
    console.log(this.statusArray);
  }
  static #_ = this.ɵfac = function RerunDialogComponent_Factory(t) {
    return new (t || RerunDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_0__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RerunDialogComponent,
    selectors: [["app-rerun-dialog"]],
    decls: 32,
    vars: 1,
    consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "ui-dialog-title-rerunDialog", "id", "dialog-ident-rerunDialog", 1, "ui-dialog", 2, "display", "block", "z-index", "1004", "outline", "0px", "height", "auto", "width", "400px", "position", "inherit !important"], [1, "ui-dialog-titlebar", "ui-widget-header", "ui-corner-all", "ui-helper-clearfix"], ["id", "ui-dialog-title-rerunDialog", 1, "ui-dialog-title"], ["href", "#", "role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick"], ["id", "rerunDialog", 1, "dialog", "ui-dialog-content", "ui-widget-content", 2, "width", "auto", "display", "block", "min-height", "0px", "height", "auto"], [1, "dialog-title"], ["id", "rerunForm"], [1, "dialog-body"], [1, "top"], ["id", "rerunErrors", 1, "message", "message-error", "hidden", "validationError"], ["id", "rerunStatuses_control", 1, "checkbox-list", 2, "height", "200px"], [1, "checkbox-list-inner"], [1, "checkbox-list-toolbar", "toolbar", "toolbar-compact"], [1, "toolbar-inner", "text-secondary"], ["href", "javascript:void(0)", 1, "link", 3, "click"], ["class", "checkbox checkbox-list-item", 4, "ngFor", "ngForOf"], [1, "button-group", "dialog-buttons-highlighted"], ["type", "submit", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default", 3, "click"], [1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"], [1, "checkbox", "checkbox-list-item"], [1, "checkbox-name", "text-ppp"], ["name", "rerunStatuses[]", "type", "checkbox", 1, "checkbox-list-input", 3, "id", "value", "checked", "click"]],
    template: function RerunDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Select Tests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Select Tests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7)(11, "div", 8)(12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Include tests of the following previous status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RerunDialogComponent_Template_a_click_20_listener() {
          return ctx.selectAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RerunDialogComponent_Template_a_click_23_listener() {
          return ctx.clearAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RerunDialogComponent_div_25_Template, 5, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div")(27, "div", 17)(28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RerunDialogComponent_Template_button_click_28_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " OK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RerunDialogComponent_Template_a_click_30_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statusArray);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2945:
/*!*******************************************************************!*\
  !*** ./src/app/components/project/test-run/test-run.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestRunComponent": () => (/* binding */ TestRunComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_base_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/base-paginator */ 9891);
/* harmony import */ var _test_run_rerun_dialog_rerun_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test-run/rerun-dialog/rerun-dialog.component */ 7299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);











function TestRunComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
  }
}
const _c0 = function (a1) {
  return ["/test-runs-add", a1];
};
function TestRunComponent_ng_template_22_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Add Test Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r9.projectId));
  }
}
function TestRunComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "What's a test run?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Once you have started adding test cases, you can start a test run to execute your tests and track results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 52)(7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " This project doesn't have any test runs, yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 54)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "No test runs have been defined for this project, yet. Use the following button to add your first test run.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, TestRunComponent_ng_template_22_a_13_Template, 2, 3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isActive("ADD_TESTRUN"));
  }
}
function TestRunComponent_ng_template_24_ng_template_0_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const testRun_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" By ", testRun_r13.fullname, " on ", testRun_r13.createdOn, " ");
  }
}
const _c1 = function (a1, a3) {
  return ["/test-runs", a1, "detail", a3];
};
const _c2 = function (a1) {
  return ["/test-runs-edit", a1];
};
function TestRunComponent_ng_template_24_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66)(3, "div", 67)(4, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestRunComponent_ng_template_24_ng_template_0_div_5_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const testRun_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.openDialog(testRun_r13.runId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Rerun");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, TestRunComponent_ng_template_24_ng_template_0_div_5_div_13_Template, 2, 2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testRun_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](11, _c1, ctx_r12.projectId, testRun_r13.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", testRun_r13.runName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" By ", testRun_r13.fullname, " on ", testRun_r13.createdOn, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c2, testRun_r13.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r12.isActive("EDIT_TESTRUN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate5"](" ", testRun_r13.passedCount, " Passed, ", testRun_r13.blockedCount, " Blocked, ", testRun_r13.untestedCount, " Untested, ", testRun_r13.retestCount, " Retest and ", testRun_r13.failedCount, " Failed. ");
  }
}
function TestRunComponent_ng_template_24_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 60)(3, "div", 61)(4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TestRunComponent_ng_template_24_ng_template_0_div_5_Template, 16, 16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.incompleteTestRuns);
  }
}
function TestRunComponent_ng_template_24_ng_template_1_div_3_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 80)(1, "td")(2, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testRun_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c1, ctx_r20.projectId, testRun_r21.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", testRun_r21.runName, " ");
  }
}
function TestRunComponent_ng_template_24_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h3")(2, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "table", 78)(5, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TestRunComponent_ng_template_24_ng_template_1_div_3_tr_8_Template, 4, 5, "tr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entry_r19.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", entry_r19.value);
  }
}
function TestRunComponent_ng_template_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TestRunComponent_ng_template_24_ng_template_1_div_3_Template, 9, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, ctx_r11.completedTestRuns));
  }
}
function TestRunComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TestRunComponent_ng_template_24_ng_template_0_Template, 6, 1, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TestRunComponent_ng_template_24_ng_template_1_Template, 5, 3, "ng-template", 58);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.incompleteTestRuns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.completedTestRuns.size);
  }
}
function TestRunComponent_a_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 81)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Add Test Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r5.projectId));
  }
}
function TestRunComponent_p_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " There are no test runs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TestRunComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 82)(1, "strong", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " open and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "strong", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " completed test runs in this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.incompleteTestRuns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.numCompletedTestRuns);
  }
}
class TestRunComponent extends _core_base_paginator__WEBPACK_IMPORTED_MODULE_0__.BasePaginator {
  constructor(route, testRunService, datePipe, authService, dialog) {
    super();
    this.route = route;
    this.testRunService = testRunService;
    this.datePipe = datePipe;
    this.authService = authService;
    this.dialog = dialog;
    this.projectId = '';
    this.incompleteTestRuns = [];
    this.completedTestRuns = new Map();
    this.numCompletedTestRuns = 0;
  }
  refresh() {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = params['id'];
      console.log(this.projectId);
      this.testRunService.findAllByProjectId(parseInt(this.projectId)).subscribe(testRuns => {
        for (const testRun of testRuns) {
          if (testRun.isCompleted) {
            if (!testRun.completedOn) {
              continue;
            }
            if (testRun.completedOn instanceof Array) {
              let date = this.datePipe.transform(testRun.completedOn[0] + '/' + testRun.completedOn[1] + '/' + testRun.completedOn[2], 'EEEE, MMMM d, y');
              if (!date) {
                continue;
              }
              testRun.completedOn = date;
              let array = this.completedTestRuns.get(testRun.completedOn);
              if (!array) {
                this.completedTestRuns.set(testRun.completedOn, [testRun]);
              } else {
                array.push(testRun);
              }
              this.numCompletedTestRuns++;
            }
          } else {
            if (testRun.createdOn instanceof Array) {
              testRun.createdOn = testRun.createdOn[2] + '/' + testRun.createdOn[1] + '/' + testRun.createdOn[0];
            }
            this.incompleteTestRuns.push(testRun);
          }
        }
      });
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  openDialog(runId) {
    const dialogRef = this.dialog.open(_test_run_rerun_dialog_rerun_dialog_component__WEBPACK_IMPORTED_MODULE_1__.RerunDialogComponent, {
      data: {
        projectId: this.projectId,
        testrunId: runId
      }
    }).afterClosed().subscribe(_ => {});
  }
  static #_ = this.ɵfac = function TestRunComponent_Factory(t) {
    return new (t || TestRunComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_2__.TestRunService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TestRunComponent,
    selectors: [["app-test-run"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 73,
    vars: 8,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "qpane-splitter", 1, "column", "splitter", "qpane-splitter", 2, "display", "none"], ["id", "qpane", 1, "column", "qpane", 2, "width", "600px", "display", "none"], ["id", "qpane-empty", 1, "qpane-empty", "hidden"], [1, "qpane-empty-header"], [1, "qpane-empty-body"], ["id", "qpane-inner"], ["id", "qpaneSticky"], ["id", "qpane-content"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], ["id", "bulkDeleteDialog", 1, "dialog", "bulk-delete-dialog"], [1, "dialog-title"], [1, "dialog-body"], [1, "top", "bottom", "dialog-message"], [1, "dialog-extra", "text-delete"], [1, "message", "message-delete", "bottom", "delete-confirm-container", "confirm-container"], [1, "checkbox"], [1, "dialog-confirm"], [2, "color", "red"], [1, "dialog-confirm-busy"], ["id", "confirm-check", "type", "checkbox", "value", "1", "name", "deleteCheckbox"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-black", "button-black-disabled", "button-left", "button-positive", "button-disabled", "dialog-action-default"], [1, "button", "button-left", "button-delete", "button-disabled", "button-hidden", "button-no-margin-right", "dialog-action-secondary"], [1, "button", "button-cancel", "button-left", "button-negative", "dialog-action-close"], [1, "sidebar-inner"], ["id", "navigation-runs-add", "class", "sidebar-button bottom", 3, "routerLink", 4, "ngIf"], ["class", "top", 4, "ngIf", "ngIfElse"], ["elseCountBlock", ""], [1, "empty", "empty-with-explanation"], [1, "empty-explanation"], [1, "empty-explanation-title"], [1, "empty-explanation-body"], [1, "empty-content", "empty-info"], [1, "empty-title"], [1, "empty-body"], [1, "button-group"], ["class", "button button-left button-add", 3, "routerLink", 4, "ngIf"], [1, "button", "button-left", "button-add", 3, "routerLink"], [3, "ngIf"], [1, "top", "width-4"], ["id", "open"], ["id", "active"], [1, "table", 2, "margin-top", "1.2em"], ["id", "run-24", "class", "row flex-runs-row", 4, "ngFor", "ngForOf"], ["id", "run-24", 1, "row", "flex-runs-row"], [1, "column", "summary-column", "summary-column-icon", "flex-runs-1", "icon-run-64", "summary-column-first", "summary-column-last"], [1, "column", "summary-column", "flex-runs-2", "summary-column-first", "summary-column-last"], [1, "summary-title", "text-ppp"], [3, "routerLink"], [1, "summary-links", "text-secondary"], [1, "link", 3, "routerLink"], [1, "link", 3, "click"], ["class", "summary-links text-secondary", 4, "ngIf"], [1, "summary-description"], [1, "width-6", 2, "margin-top", "2em"], ["id", "completed"], [4, "ngFor", "ngForOf"], [1, "title"], [1, "run-grid", "grid"], ["class", "odd hoverSensitive", 4, "ngFor", "ngForOf"], [1, "odd", "hoverSensitive"], ["id", "navigation-runs-add", 1, "sidebar-button", "bottom", 3, "routerLink"], [1, "top"], [1, "text-softer"]],
    template: function TestRunComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Test Runs & Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, TestRunComponent_div_21_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TestRunComponent_ng_template_22_Template, 14, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TestRunComponent_ng_template_24_Template, 2, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 20)(28, "div", 21)(29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " No test case selected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " You can select a different group or change the filters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 24)(34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 28)(38, "div", 29)(39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p", 32)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Really delete these test runs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " This also deletes all tests & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " results in these runs and cannot be undone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 34)(51, "div", 35)(52, "label")(53, "span", 36)(54, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Yes, I want to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "irrevocably delete at least tests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "and the related test results & comments.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "span", 38)(61, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 40)(63, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, TestRunComponent_a_69_Template, 3, 3, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, TestRunComponent_p_70_Template, 2, 0, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, TestRunComponent_ng_template_71_Template, 7, 2, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](25);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("projectId", ctx.projectId)("selectedMenu", "test-runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.incompleteTestRuns.length && !ctx.completedTestRuns.size)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_TESTRUN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.completedTestRuns.size && !ctx.incompleteTestRuns.length)("ngIfElse", _r7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_4__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/test-run/test-run.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3QtcnVuL3Rlc3QtcnVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 909:
/*!**************************************************************************************!*\
  !*** ./src/app/components/project/testcase/add-test-case/add-test-case.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTestCaseComponent": () => (/* binding */ AddTestCaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mode */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/section.service */ 1588);
/* harmony import */ var src_app_services_priority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/priority.service */ 4391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/header/header.component */ 9470);












function AddTestCaseComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Add Test Case ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddTestCaseComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("C", ctx_r1.testCase.caseId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.testCase.caseName, " ");
  }
}
function AddTestCaseComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", section_r6.sectionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", section_r6.sectionName, " ");
  }
}
function AddTestCaseComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", priority_r7.prioritiesId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", priority_r7.priorityName, " ");
  }
}
function AddTestCaseComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddTestCaseComponent_button_80_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.update());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save Test Case ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r4.testCase.caseName.trim().length == 0 || !ctx_r4.testCase.sectionId || !ctx_r4.testCase.priorityId || !ctx_r4.testCase.projectId);
  }
}
function AddTestCaseComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddTestCaseComponent_ng_template_81_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Add Test Case ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddTestCaseComponent_ng_template_81_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Add & Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r5.testCase.caseName.trim().length == 0 || !ctx_r5.testCase.sectionId || !ctx_r5.testCase.priorityId || !ctx_r5.testCase.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r5.testCase.caseName.trim().length == 0 || !ctx_r5.testCase.sectionId || !ctx_r5.testCase.priorityId);
  }
}
class AddTestCaseComponent {
  constructor(sectionService, priorityService, _location, testCaseService, router, toastr, route, authService) {
    this.sectionService = sectionService;
    this.priorityService = priorityService;
    this._location = _location;
    this.testCaseService = testCaseService;
    this.router = router;
    this.toastr = toastr;
    this.route = route;
    this.authService = authService;
    this.testCase = {
      caseName: '',
      projectId: 0,
      sectionId: undefined,
      priorityId: undefined
    };
    this.sections = [];
    this.priorities = [];
    this.currentMode = src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create;
    this.Mode = src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode;
  }
  ngOnInit() {
    this.currentMode = this.router.url.startsWith('/test-cases-edit/') ? src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Update : src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create;
    console.log('Current mode: ' + this.currentMode);
    this.route.params.subscribe(params => {
      console.log(params);
      switch (this.currentMode) {
        case src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Create:
          this.testCase.projectId = params['id'];
          this.getSectionsByProjectId(this.testCase.projectId);
          break;
        case src_app_core_mode__WEBPACK_IMPORTED_MODULE_0__.Mode.Update:
          this.testCaseService.findByTestCaseId(params['id']).subscribe(testCase => {
            this.testCase = testCase;
            this.getSectionsByProjectId(this.testCase.projectId);
          });
          break;
        default:
          break;
      }
      this.priorityService.findAll().subscribe(priorities => {
        this.priorities = priorities;
      });
    });
  }
  getSectionsByProjectId(projectId) {
    if (!projectId) {
      console.error('projectId is undefined');
      return;
    }
    this.sectionService.findAllByProjectId(projectId).subscribe(sections => {
      this.sections = sections;
    });
  }
  backClicked() {
    this._location.back();
  }
  submit() {
    this.testCaseService.addTestCase(this.testCase).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add testcase success', 'Success');
        this.router.navigateByUrl('/test-cases/' + this.testCase.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add testcase failed', 'Error');
      }
    });
  }
  update() {
    this.testCaseService.update(this.testCase).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Update test case success', 'Success');
        this.router.navigateByUrl('/test-cases/' + this.testCase.projectId);
      },
      error: e => {
        console.log(e);
        this.toastr.error('Update test case failed', 'Error');
      }
    });
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function AddTestCaseComponent_Factory(t) {
    return new (t || AddTestCaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_section_service__WEBPACK_IMPORTED_MODULE_1__.SectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_priority_service__WEBPACK_IMPORTED_MODULE_2__.PriorityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_3__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AddTestCaseComponent,
    selectors: [["app-add-test-case"]],
    decls: 86,
    vars: 22,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], ["class", "content-header-title page_title", 4, "ngIf"], [3, "ngIf"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["action", "index.php?/cases/add/1", "id", "form", "method", "post"], ["type", "hidden", "name", "_token", "value", "kyqRSAYnPxiKjL7HwuCW"], ["type", "hidden", "id", "attachments", "name", "attachments", "value", ""], ["type", "hidden", "id", "js_test", "name", "js_test", "value", "0"], ["id", "form-controls"], [1, "form-group", "form-group-main"], ["for", "title"], [1, "form-required"], ["type", "text", "name", "title", "id", "title", "maxlength", "250", "value", "", 1, "form-control", "form-control-full", "form-fields", 3, "disabled", "ngModel", "ngModelChange"], [1, "io-container", "io-framed", "form-group", "table"], [1, "column-p4", "column"], ["for", "section_id", 1, "io-label"], ["name", "section_id", "id", "section_id", 1, "form-control", "form-control-full", "form-select", "searchable", "chzn-done", 2, "width", "100%", 3, "disabled", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "priority_id", 1, "io-label"], ["name", "priority_id", "id", "priority_id", 1, "form-control", "form-control-full", "form-select", "searchable", "chzn-done", 2, "width", "100%", 3, "disabled", "ngModel", "ngModelChange"], ["for", "estimate", 1, "io-label"], ["type", " text", "name", "estimate", "id", "estimate", "maxlength", "250", "value", "", 1, "form-control", "form-control-full", "form-fields", 3, "disabled", "ngModel", "ngModelChange"], [1, "form-group"], ["for", "custom_preconds"], [1, "textarea-resizable"], ["rows", "6", "name", "preconditions", "id", "preconditions", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "disabled", "ngModel", "ngModelChange"], [1, "textarea-grippie"], [1, "form-description", "form-description-full"], ["for", "custom_steps"], ["rows", "6", "name", "steps", "id", "steps", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "disabled", "ngModel", "ngModelChange"], ["for", "custom_expected"], ["rows", "6", "name", "expectedResult", "id", "expectedResult", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "disabled", "ngModel", "ngModelChange"], ["id", "custom_expected_display_drop", "rel", "custom_expected_display", "dialog", "", "data-project-id", "1", 1, "dropzone", "dz-clickable"], [1, "dz-default", "dz-message"], [1, "button-group"], ["id", "accept", "type", "button", "class", "button button-left button-positive button-ok", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "button", "button-left", "button-negative", "button-cancel", "leave", "case-form-cancel", 3, "click"], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [1, "content-header-title", "page_title"], [1, "content-header-id"], [3, "value"], ["id", "accept", "type", "button", 1, "button", "button-left", "button-positive", "button-ok", 3, "disabled", "click"], ["id", "accept_and_next", "type", "button", "name", "save_and_next", "value", "1", 1, "button", "button-left", "button-positive", "button-ok", 3, "disabled", "click"]],
    template: function AddTestCaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AddTestCaseComponent_div_18_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, AddTestCaseComponent_ng_template_19_Template, 4, 2, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 16)(21, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 18)(23, "input", 19)(24, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 21)(26, "div", 22)(27, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.testCase.caseName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 26)(33, "div", 27)(34, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_select_ngModelChange_38_listener($event) {
          return ctx.testCase.sectionId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, AddTestCaseComponent_option_39_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 27)(41, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_select_ngModelChange_45_listener($event) {
          return ctx.testCase.priorityId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, AddTestCaseComponent_option_46_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 27)(48, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_input_ngModelChange_50_listener($event) {
          return ctx.testCase.estimate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 35)(52, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " Preconditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 37)(55, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_textarea_ngModelChange_55_listener($event) {
          return ctx.testCase.preconditions = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "The preconditions of this test case. Reference other test cases with [C#] (e.g. [C17]).");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 35)(60, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, " Steps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 37)(63, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_textarea_ngModelChange_63_listener($event) {
          return ctx.testCase.steps = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "The required steps to execute the test case.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 35)(68, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " Expected Result ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 37)(71, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddTestCaseComponent_Template_textarea_ngModelChange_71_listener($event) {
          return ctx.testCase.expectedResult = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 45)(74, "div", 46)(75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Drop images here to embed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "The expected result after executing the test case.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, AddTestCaseComponent_button_80_Template, 2, 1, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, AddTestCaseComponent_ng_template_81_Template, 4, 2, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddTestCaseComponent_Template_button_click_82_listener() {
          return ctx.backClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "div", 50)(85, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("projectId", ctx.testCase.projectId + "")("selectedMenu", "test-cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentMode == ctx.Mode.Create);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentMode == ctx.Mode.Update);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.caseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.sectionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.priorityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.estimate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.preconditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isActive("ADD_TESTCASE") && !ctx.isActive("EDIT_TESTCASE"))("ngModel", ctx.testCase.expectedResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentMode == ctx.Mode.Update && ctx.isActive("EDIT_TESTCASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentMode == ctx.Mode.Create && ctx.isActive("ADD_TESTCASE"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_5__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/testcase/add-test-case/add-test-case.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3RjYXNlL2FkZC10ZXN0LWNhc2UvYWRkLXRlc3QtY2FzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsT0FBQTtFQUNBLGtGQUFBO0VBQ0EsY0FBQTtBQUNOIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uID4gZGl2IHtcbiAgZmxleDogMTtcbiAgLyogMSBhbmQgaXQgd2lsbCBmaWxsIHdob2xlIHNwYWNlIGxlZnQgaWYgbm8gZmxleCB2YWx1ZSBhcmUgc2V0IHRvIG90aGVyIGNoaWxkcmVuKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2124:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/project/testcase/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDeleteDialogComponent": () => (/* binding */ ConfirmDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






class ConfirmDeleteDialogComponent {
  constructor(sectionDialog, data, testCaseService, toastr) {
    this.sectionDialog = sectionDialog;
    this.data = data;
    this.testCaseService = testCaseService;
    this.toastr = toastr;
    this.testCaseId = 0;
  }
  ngOnInit() {
    console.log(this.data);
    this.testCaseId = this.data?.testCaseId;
  }
  close() {
    this.sectionDialog.close();
  }
  delete() {
    this.testCaseService.delete(this.testCaseId).subscribe({
      next: res => {
        console.log(res);
        if (res.deletedCount == 0) {
          this.toastr.error('Test case is running or not available', 'Delete test case failed');
        } else {
          this.toastr.success('Delete test case success', 'Success');
        }
        this.sectionDialog.close();
      },
      error: e => {
        console.log(e);
        this.toastr.error('Test case is running or not available', 'Delete test case failed');
        this.sectionDialog.close();
      }
    });
  }
  static #_ = this.ɵfac = function ConfirmDeleteDialogComponent_Factory(t) {
    return new (t || ConfirmDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ConfirmDeleteDialogComponent,
    selectors: [["app-confirm-delete-dialog"]],
    decls: 18,
    vars: 0,
    consts: [["id", "confirm-delete-title", 1, "ui-dialog-titlebar", "ui-widget-header"], ["id", "ui-dialog-title-casesDeletionDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "editSectionForm", 1, "dialogFormDefault"], [1, "dialog-body", 2, "width", "385px"], [1, "top"], [1, "singular"], [1, "button-group", "dialog-buttons-highlighted"], [1, "button", "button-left", "button-positive", "button-no-margin-right", "dialog-action-secondary", "button-black", 3, "click"], [1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"]],
    template: function ConfirmDeleteDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Confirmation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_span_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4)(7, "div", 5)(8, "p", 6)(9, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Really delete this test case?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 'Delete Permanently' can only delete if there is no active tests and results for this case and cannot be undone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_a_click_14_listener() {
          return ctx.delete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Delete Permanently ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_a_click_16_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["#confirm-delete-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  background: rgb(228, 0, 70);\n}\n/*# sourceURL=webpack://./src/app/components/project/testcase/confirm-delete-dialog/confirm-delete-dialog.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3RjYXNlL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiNjb25maXJtLWRlbGV0ZS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDIyOCwgMCwgNzApO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2954:
/*!**************************************************************************************!*\
  !*** ./src/app/components/project/testcase/export-dialog/export-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportDialogComponent": () => (/* binding */ ExportDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function ExportDialogComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", section_r1.sectionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r1.sectionName, " ");
  }
}
class ExportDialogComponent {
  constructor(exportDialog, data) {
    this.exportDialog = exportDialog;
    this.data = data;
    this.sections = [];
    this.exportType = 'all';
  }
  ngOnInit() {
    this.sections = this.data;
  }
  export() {
    this.exportDialog.close(this.exportType == 'all' ? this.exportType : this.selectedSections);
  }
  close() {
    this.exportDialog.close();
  }
  static #_ = this.ɵfac = function ExportDialogComponent_Factory(t) {
    return new (t || ExportDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExportDialogComponent,
    selectors: [["app-export-dialog"]],
    decls: 29,
    vars: 4,
    consts: [[1, "ui-dialog-titlebar", "ui-widget-header", 2, "display", "flex", "justify-content", "space-between", "padding", "10px"], ["id", "ui-dialog-title-editSectionDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "editSectionForm", 1, "dialogFormDefault"], [1, "dialog-body"], [1, "form-group"], [1, "radio", "form-radio", 2, "margin-left", "5px", "margin-top", "15px"], ["type", "radio", "id", "exportCsvSectionsAll", "name", "exportCsvSections", "value", "all", "checked", "checked", 3, "ngModel", "ngModelChange"], [1, "radio", "form-radio", 2, "margin-left", "5px"], ["type", "radio", "id", "exportCsvSectionsSelected", "name", "exportCsvSections", "value", "selected", 3, "ngModel", "ngModelChange"], [2, "margin-left", "25px"], ["id", "exportCsvSectionsSelection", "name", "exportCsvSectionsSelection", "multiple", "multiple", 1, "form-control", "form-select", 2, "width", "100%", "height", "120px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-description"], [1, "button-group", "dialog-buttons-highlighted"], ["id", "exportSubmit", "type", "submit", 1, "button", "button-left", "button-positive", "button-add", "dialog-action-default", 3, "click"], [1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"], [3, "value"]],
    template: function ExportDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Export to CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportDialogComponent_Template_span_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4)(7, "div", 5)(8, "div", 6)(9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Export all sections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExportDialogComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.exportType = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Export the following sections only: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExportDialogComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.exportType = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11)(20, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExportDialogComponent_Template_select_ngModelChange_20_listener($event) {
          return ctx.selectedSections = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExportDialogComponent_option_21_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " You can select multiple sections by holding Ctrl/Cmd on your keyboard. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportDialogComponent_Template_button_click_25_listener() {
          return ctx.export();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportDialogComponent_Template_button_click_27_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.exportType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.exportType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7900:
/*!**************************************************************************************!*\
  !*** ./src/app/components/project/testcase/import-dialog/import-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDialogComponent": () => (/* binding */ ImportDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






class ImportDialogComponent {
  constructor(importDialog, data, testCaseService, toastr) {
    this.importDialog = importDialog;
    this.data = data;
    this.testCaseService = testCaseService;
    this.toastr = toastr;
    this.projectId = 0;
    this.isImporting = false;
  }
  ngOnInit() {
    this.projectId = this.data;
  }
  handleFileInput(event) {
    const element = event.currentTarget;
    let fileList = element.files;
    if (fileList && fileList.length) {
      this.uploadFile = fileList[0];
    }
  }
  import() {
    if (this.uploadFile) {
      this.isImporting = true;
      this.testCaseService.importTestCases(this.projectId, this.uploadFile).subscribe({
        next: res => {
          console.log(res);
          this.toastr.success(res, 'Success');
          this.importDialog.close();
        },
        error: e => {
          console.log(e);
          this.toastr.error(e.error, 'Error');
          this.isImporting = false;
        }
      });
    }
  }
  downloadTemplate() {
    let csvContent = "data:text/csv;charset=utf-8,Title,Estimate,Priority,Section,,Priority: High / Low / Medium,,,Estimate: Integer number";
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "test_cases.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "test_cases.csv".
  }

  close() {
    this.importDialog.close();
  }
  static #_ = this.ɵfac = function ImportDialogComponent_Factory(t) {
    return new (t || ImportDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImportDialogComponent,
    selectors: [["app-import-dialog"]],
    decls: 25,
    vars: 2,
    consts: [[1, "ui-dialog-titlebar", "ui-widget-header", 2, "display", "flex", "justify-content", "space-between", "padding", "10px"], ["id", "ui-dialog-title-editSectionDialog", 1, "ui-dialog-title"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "editSectionForm", 1, "dialogFormDefault"], [1, "dialog-body"], ["id", "importCsvSteps"], ["id", "importCsvStep1", 2, "display", "block"], [1, "dialog-h1"], [1, "form-group"], ["for", "importCsvFile"], [1, "form-required"], ["size", "45", "type", "file", "accept", ".csv, .CSV", "name", "importCsvFile", "id", "importCsvFile", 1, "form-control", "form-control-upload", 2, "display", "block", 3, "change"], ["target", "_blank", "rel", "noopener noreferrer", 3, "click"], [1, "button-group", "dialog-buttons-highlighted"], ["id", "importCsvImport", "type", "submit", "rel", "import", 1, "button", "button-left", "button-positive", "button-add", 3, "disabled", "click"], ["id", "importCsvCancel", 1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"]],
    template: function ImportDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Import from CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportDialogComponent_Template_span_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Load File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImportDialogComponent_Template_input_change_17_listener($event) {
          return ctx.handleFileInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportDialogComponent_Template_a_click_18_listener() {
          return ctx.downloadTemplate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Download Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportDialogComponent_Template_button_click_21_listener() {
          return ctx.import();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportDialogComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.uploadFile === undefined || ctx.isImporting);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isImporting ? "Importing" : "Import", " ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2118:
/*!****************************************************************************************!*\
  !*** ./src/app/components/project/testcase/section-dialog/section-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionDialogComponent": () => (/* binding */ SectionDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/section.service */ 1588);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function SectionDialogComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SectionDialogComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class SectionDialogComponent {
  constructor(sectionDialog, data, sectionService, toastr) {
    this.sectionDialog = sectionDialog;
    this.data = data;
    this.sectionService = sectionService;
    this.toastr = toastr;
    this.dialogType = '';
    this.section = {
      sectionName: '',
      projectId: 1
    };
  }
  ngOnInit() {
    console.log(this.data);
    this.dialogType = this.data && this.data.type ? this.data.type : '';
    this.section.projectId = this.data?.projectId;
  }
  close() {
    this.sectionDialog.close();
  }
  submit() {
    this.sectionService.create(this.section).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Add section success', 'Success');
        this.close();
      },
      error: e => {
        console.log(e);
        this.toastr.error('Add section failed', 'Error');
      }
    });
  }
  static #_ = this.ɵfac = function SectionDialogComponent_Factory(t) {
    return new (t || SectionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_section_service__WEBPACK_IMPORTED_MODULE_0__.SectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SectionDialogComponent,
    selectors: [["app-section-dialog"]],
    decls: 38,
    vars: 5,
    consts: [[1, "ui-dialog-titlebar", "ui-widget-header", 2, "display", "flex", "justify-content", "space-between", "padding", "10px"], ["class", "ui-dialog-title", "id", "ui-dialog-title-editSectionDialog", 4, "ngIf"], ["role", "button", 1, "ui-dialog-titlebar-close", "ui-corner-all"], [1, "ui-icon", "ui-icon-closethick", 3, "click"], ["id", "editSectionForm", 1, "dialogFormDefault"], [1, "dialog-body"], [1, "form-group"], ["for", "editSectionName"], [1, "form-required"], ["autocomplete", "off", "type", "text", "name", "editSectionName", "id", "editSectionName", "maxlength", "250", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-description", "form-description-full"], [1, "form-group", "bottom"], ["for", "editSectionDescription"], [1, "textarea-resizable"], ["rows", "6", "name", "announcement", "id", "announcement", 1, "form-control", "form-control-full", "processed", "textarea-with-grippie", 3, "ngModel", "ngModelChange"], [1, "textarea-grippie"], [1, "button-group", "dialog-buttons-highlighted"], ["id", "editSectionSubmit", "type", "button", 1, "button", "button-left", "button-positive", "button-ok", "dialog-action-default", 3, "disabled", "click"], [1, "editSectionAdd"], [1, "button", "button-left", "button-negative", "button-cancel", "dialog-action-close", 3, "click"], ["id", "ui-dialog-title-editSectionDialog", 1, "ui-dialog-title"]],
    template: function SectionDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SectionDialogComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SectionDialogComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SectionDialogComponent_Template_span_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SectionDialogComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.section.sectionName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Ex: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Save Dialog Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Contact Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Performance Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11)(25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SectionDialogComponent_Template_textarea_ngModelChange_28_listener($event) {
          return ctx.section.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "An optional description for this section (e.g. to explain its content or purpose).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16)(33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SectionDialogComponent_Template_button_click_33_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Add Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SectionDialogComponent_Template_a_click_36_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogType === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogType === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.section.sectionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.section.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.section.sectionName.trim());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7174:
/*!*******************************************************************!*\
  !*** ./src/app/components/project/testcase/testcase.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestcaseComponent": () => (/* binding */ TestcaseComponent)
/* harmony export */ });
/* harmony import */ var _import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-dialog/import-dialog.component */ 7900);
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-delete-dialog/confirm-delete-dialog.component */ 2124);
/* harmony import */ var _export_dialog_export_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-dialog/export-dialog.component */ 2954);
/* harmony import */ var _section_dialog_section_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-dialog/section-dialog.component */ 2118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/section.service */ 1588);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/auth.service */ 7556);
/* harmony import */ var src_app_services_priority_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/priority.service */ 4391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);














function TestcaseComponent_div_27_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TestcaseComponent_div_27_a_13_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Add Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/test-cases-add", a1];
};
function TestcaseComponent_div_27_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Add Test Case ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r7.projectId));
  }
}
function TestcaseComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Test cases and sections?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "A test case verifies a certain feature, functionality or requirement. Sections are used to organize related test cases into groups.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 56)(7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " There aren't any test cases, yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 58)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "There aren't any sections or test cases. Use the following buttons to create the first test case and section.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, TestcaseComponent_div_27_a_13_Template, 2, 0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, TestcaseComponent_div_27_a_14_Template, 2, 3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isActive("ADD_SECTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isActive("ADD_TESTCASE"));
  }
}
function TestcaseComponent_ng_template_28_div_3_tr_35_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TestcaseComponent_ng_template_28_div_3_tr_35_a_13_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const testCase_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.deleteTestCase(testCase_r13.caseId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a1) {
  return ["/test-cases-edit", a1];
};
function TestcaseComponent_ng_template_28_div_3_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 87)(1, "td", 88)(2, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 91)(7, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 82)(10, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, TestcaseComponent_ng_template_28_div_3_tr_35_a_13_Template, 2, 0, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const testCase_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, testCase_r13.caseId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", testCase_r13.caseId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c1, testCase_r13.caseId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](testCase_r13.caseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c1, testCase_r13.caseId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.isActive("REMOVE_TESTCASE"));
  }
}
function TestcaseComponent_ng_template_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "table", 75)(11, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "col", 76)(13, "col")(14, "col", 77)(15, "col", 78)(16, "col", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "tbody")(18, "tr", 80)(19, "th")(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th")(24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "th", 82)(28, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "th", 83)(30, "span", 84)(31, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, TestcaseComponent_ng_template_28_div_3_tr_35_Template, 17, 12, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](section_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](section_r11.value.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", section_r11.value);
  }
}
function TestcaseComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, TestcaseComponent_ng_template_28_div_3_Template, 36, 3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, ctx_r2.map));
  }
}
function TestcaseComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 99)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Add Test Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r3.projectId));
  }
}
function TestcaseComponent_a_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TestcaseComponent_a_82_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Add Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function TestcaseComponent_li_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 101)(1, "ins", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "a", 103)(4, "ins", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ul", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](section_r20.sectionName);
  }
}
class TestcaseComponent {
  constructor(route, testCaseService, dialog, sectionService, authService, priorityService) {
    this.route = route;
    this.testCaseService = testCaseService;
    this.dialog = dialog;
    this.sectionService = sectionService;
    this.authService = authService;
    this.priorityService = priorityService;
    this.projectId = 0;
    this.testCases = [];
    this.map = new Map();
    this.sections = [];
    this.priorityMap = new Map();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.projectId = parseInt(params['id']);
      console.log(this.projectId);
      this.refreshTestCase(this.projectId);
      this.refreshSections(this.projectId);
    });
    this.priorityService.findAll().subscribe(priorities => {
      priorities.forEach(priority => {
        this.priorityMap.set(priority.prioritiesId, priority);
      });
    });
  }
  refreshSections(projectId) {
    this.sectionService.findAllByProjectId(projectId).subscribe(sections => {
      this.sections = sections;
      console.log(sections);
    });
  }
  refreshTestCase(projectId) {
    this.testCaseService.findAllByProjectId(projectId).subscribe(testCases => {
      this.testCases = testCases;
      this.map = new Map();
      for (const testCase of testCases) {
        if (!testCase.sectionName) continue;
        let testCases = this.map.get(testCase.sectionName);
        if (!testCases) {
          this.map.set(testCase.sectionName, [testCase]);
        } else {
          testCases.push(testCase);
        }
      }
      console.log(testCases);
      console.log(this.map);
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(_section_dialog_section_dialog_component__WEBPACK_IMPORTED_MODULE_3__.SectionDialogComponent, {
      data: {
        type: 'add',
        projectId: this.projectId
      }
    }).afterClosed().subscribe(_ => {
      this.refreshSections(this.projectId);
    });
  }
  deleteTestCase(testCaseId) {
    if (testCaseId != undefined) {
      const dialogRef = this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDeleteDialogComponent, {
        data: {
          testCaseId
        }
      }).afterClosed().subscribe(_ => {
        this.refreshTestCase(this.projectId);
      });
    }
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  openExportDialog() {
    this.dialog.open(_export_dialog_export_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ExportDialogComponent, {
      data: this.sections
    }).afterClosed().subscribe(selectedSections => {
      if (selectedSections === undefined) {
        return;
      }
      let selectedTestCases = [];
      if (selectedSections == 'all') {
        selectedTestCases = this.testCases;
      } else if (selectedSections instanceof Array) {
        let selectedSectionSet = new Set(selectedSections.map(x => parseInt(x)));
        selectedTestCases = this.testCases.filter(x => x.sectionId && selectedSectionSet.has(x.sectionId));
      }
      console.log(selectedTestCases);
      this.toCsv(selectedTestCases);
    });
  }
  openImportDialog() {
    this.dialog.open(_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ImportDialogComponent, {
      data: this.projectId
    }).afterClosed().subscribe(_ => {
      this.refreshTestCase(this.projectId);
      this.refreshSections(this.projectId);
    });
  }
  toCsv(exportTestCases) {
    // choose another string to temporally replace commas if necessary
    let stringToReplaceComas = ';';
    exportTestCases.forEach(singleRow => {
      singleRow.caseName = singleRow.caseName.replace(/,/g, stringToReplaceComas);
      // singleRow.pr
    });

    let csvContent = "data:text/csv;charset=utf-8,Title,Estimate,Priority,Section\r\n";
    for (const testCase of exportTestCases) {
      if (!testCase.priorityId) {
        continue;
      }
      csvContent += testCase.caseName.replace(/,/g, stringToReplaceComas) + ',' + testCase.estimate + ',' + this.priorityMap.get(testCase.priorityId)?.priorityName.replace(/,/g, stringToReplaceComas) + ',' + testCase.sectionName?.replace(/,/g, stringToReplaceComas) + '\r\n';
    }
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "test_cases.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "test_cases.csv".
  }
  static #_ = this.ɵfac = function TestcaseComponent_Factory(t) {
    return new (t || TestcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_4__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_section_service__WEBPACK_IMPORTED_MODULE_5__.SectionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_priority_service__WEBPACK_IMPORTED_MODULE_7__.PriorityService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: TestcaseComponent,
    selectors: [["app-testcase"]],
    decls: 89,
    vars: 9,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "selectedMenu"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-icon"], ["tooltip-header", "Export Cases", "tooltip-text", "Exports the sections and test cases into different formats (XML, Excel/CSV).", 1, "dropdownLink", "link-tooltip", 2, "cursor", "pointer", 3, "click"], [1, "icon-export"], [1, "content-header-icon", 3, "click"], ["tooltip-header", "Import Cases", "tooltip-text", "Imports sections and test cases from a TestRail XML or CSV file.", 1, "dropdownLink", "link-tooltip", 2, "cursor", "pointer"], [1, "icon-import"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner", "goals-clear"], ["id", "noSectionContainer", "class", "empty empty-with-explanation ", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px", "white-space", "unset"], [1, "sidebar-inner"], ["id", "sidebar-cases-add", "class", "sidebar-button", 3, "routerLink", 4, "ngIf"], ["id", "sidebarInfo"], [2, "margin", "0"], [1, "text-softer"], ["id", "editDescriptionBusy", 1, "busy"], [1, "icon-progress-inline"], ["id", "estimatesBubble", 1, "bubble", "estimate-bubble"], [1, "busy"], ["title", "Loading...", 1, "icon-progress-large"], [1, "content"], [1, "grid"], [2, "width", "110px"], [1, "noborder"], [1, "text-secondary"], ["target", "_blank", "routerLink", "http://docs.gurock.com/testrail-userguide/userguide-tips?&#scheduling_and_forecasting", 1, "link"], ["id", "sidebar-inner", 1, "sidebar-inner", 2, "padding-top", "0"], [2, "height", "2px"], ["id", "sidebarSticky"], ["id", "sidebarToolbar", 1, "toolbar"], ["id", "addSection", "class", "toolbar-button toolbar-button-last button-add", 3, "click", 4, "ngIf"], [1, "clear"], ["id", "groupTreeContainer"], ["id", "groupTreeContent", 2, "overflow", "auto", "height", "638.312px"], ["id", "groupTree", 1, "jstree", "jstree-default", "jstree-0", "jstree-focused"], ["class", "jstree-closed jstree-leaf", 4, "ngFor", "ngForOf"], ["id", "noSectionContainer", 1, "empty", "empty-with-explanation"], [1, "empty-explanation"], [1, "empty-explanation-title"], [1, "empty-explanation-body"], [1, "empty-content", "empty-info"], [1, "empty-title"], [1, "empty-body"], [1, "button-group"], ["id", "addSectionInline", "class", "button button-left button-add", "routerLink", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "button button-left button-add", 3, "routerLink", 4, "ngIf"], ["id", "addSectionInline", "routerLink", "javascript:void(0)", 1, "button", "button-left", "button-add", 3, "click"], [1, "button", "button-left", "button-add", 3, "routerLink"], ["id", "groupContainer", 2, "margin-top", "1.5em", "display", "block"], ["id", "groupContent"], ["id", "groups"], ["id", "section-4", "rel", "4", "class", "group grid-container", 4, "ngFor", "ngForOf"], ["id", "section-4", "rel", "4", 1, "group", "grid-container"], [1, "grid-title"], ["id", "sectionName-4", 1, "title"], ["id", "sectionCount-4", 1, "text-secondary", "section-count"], ["id", "sectionBusy-4", 1, "busy", 2, "display", "none"], ["id", "sectionDesc-4", 1, "hidden", "remove_scroll_add_margin", "scroll-auto"], [1, "scroll-auto-inner", "markdown"], ["id", "grid-4", 1, "grid", 2, "margin-bottom", "0.75em"], [2, "width", "65px"], [1, "action-edit"], [1, "action-delete"], [1, "action", "columns"], [1, "header", "sectionRow", "caseDroppable"], [1, "column-actions"], [1, "action"], ["id", "selectColumns-4", 1, "action", "columns"], [1, "select"], [1, "icon-columns"], ["id", "row-36", "rel", "36", "class", "caseRow row odd caseDroppable ", 4, "ngFor", "ngForOf"], ["id", "row-36", "rel", "36", 1, "caseRow", "row", "odd", "caseDroppable"], [1, "id"], ["rel", "keep-get", 1, "link-noline", 3, "routerLink"], ["title", "Test Case Deleted", 1, "case-deleted", "case-deleted-hidden"], ["rel", "keep-get", 3, "routerLink"], [1, "title"], ["rel", "keep-get", 1, "editLink", 3, "routerLink"], [1, "icon-small-edit", "hidden", "action-hover"], ["class", "deleteLink", 3, "click", 4, "ngIf"], [1, "busy", "deleteBusy"], [1, "deleteLink", 3, "click"], [1, "icon-small-delete", "hidden", "action-hover"], ["id", "sidebar-cases-add", 1, "sidebar-button", 3, "routerLink"], ["id", "addSection", 1, "toolbar-button", "toolbar-button-last", "button-add", 3, "click"], [1, "jstree-closed", "jstree-leaf"], [1, "jstree-icon"], ["href", "", 1, "caseDroppable"], ["id", "sectionNameAlt-11"], [1, ""]],
    template: function TestcaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div")(3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "link", 2)(7, "link", 3)(8, "link", 4)(9, "link", 5)(10, "link", 6)(11, "link", 7)(12, "link", 8)(13, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "span", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TestcaseComponent_Template_span_click_19_listener() {
          return ctx.openExportDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TestcaseComponent_Template_span_click_21_listener() {
          return ctx.openImportDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " Test Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, TestcaseComponent_div_27_Template, 15, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, TestcaseComponent_ng_template_28_Template, 5, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, TestcaseComponent_a_34_Template, 3, 3, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 28)(36, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " Contains ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "strong", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " sections and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "strong", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 33)(50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 36)(53, "table", 37)(54, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "col", 38)(56, "col");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "tbody")(58, "tr")(59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "No estimates");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "1 / 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "tr")(64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Total estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "n/a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "tr")(69, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Total forecast");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, " n/a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 42)(79, "div", 43)(80, "div", 44)(81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](82, TestcaseComponent_a_82_Template, 2, 0, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 48)(85, "div", 49)(86, "div", 50)(87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, TestcaseComponent_li_88_Template, 9, 1, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("projectId", ctx.projectId + "")("selectedMenu", "test-cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.testCases.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_TESTCASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.sections.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.testCases.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isActive("ADD_SECTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.sections);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_8__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.KeyValuePipe],
    styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  overflow: auto;\n}\n/*# sourceURL=webpack://./src/app/components/project/testcase/testcase.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Rlc3RjYXNlL3Rlc3RjYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0ZBQUE7RUFDQSxjQUFBO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24gPiBkaXYge1xuICBmbGV4OiAxO1xuICAvKiAxIGFuZCBpdCB3aWxsIGZpbGwgd2hvbGUgc3BhY2UgbGVmdCBpZiBubyBmbGV4IHZhbHVlIGFyZSBzZXQgdG8gb3RoZXIgY2hpbGRyZW4qL1xuICBvdmVyZmxvdzogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2350:
/*!*************************************************************************************!*\
  !*** ./src/app/components/search-detail-project/search-detail-project.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchDetailProjectComponent": () => (/* binding */ SearchDetailProjectComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/test-case.service */ 1051);
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/milestone.service */ 8964);
/* harmony import */ var src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/test-run.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/new-menu-project/new-menu-project.component */ 6303);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);









function SearchDetailProjectComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
  }
}
function SearchDetailProjectComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/test-cases-edit", a1];
};
function SearchDetailProjectComponent_ng_template_27_ng_template_0_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30)(1, "td", 27)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Test Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 28)(5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testCase_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "case-", testCase_r9.caseId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, testCase_r9.caseId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" C", testCase_r9.caseId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, testCase_r9.caseId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](testCase_r9.caseName);
  }
}
function SearchDetailProjectComponent_ng_template_27_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Test Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 26)(3, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "col", 27)(5, "col", 28)(6, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SearchDetailProjectComponent_ng_template_27_ng_template_0_tr_8_Template, 10, 9, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.testCases);
  }
}
const _c1 = function (a1, a3) {
  return ["/milestones", a1, "detail", a3];
};
function SearchDetailProjectComponent_ng_template_27_ng_template_1_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 36)(1, "td", 27)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 28)(5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const milestone_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "milestone-", milestone_r11.milestoneId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c1, ctx_r10.project.projectId, milestone_r11.milestoneId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" M", milestone_r11.milestoneId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c1, ctx_r10.project.projectId, milestone_r11.milestoneId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", milestone_r11.milestoneName, " ");
  }
}
function SearchDetailProjectComponent_ng_template_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 34)(3, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "col", 27)(5, "col", 28)(6, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SearchDetailProjectComponent_ng_template_27_ng_template_1_tr_8_Template, 10, 11, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.milestones);
  }
}
const _c2 = function (a1, a3) {
  return ["/test-runs", a1, "detail", a3];
};
function SearchDetailProjectComponent_ng_template_27_ng_template_2_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 36)(1, "td", 27)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Test Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 28)(5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testRun_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "run-", testRun_r13.runId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c2, ctx_r12.project.projectId, testRun_r13.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" R", testRun_r13.runId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c2, ctx_r12.project.projectId, testRun_r13.runId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", testRun_r13.runName, " ");
  }
}
function SearchDetailProjectComponent_ng_template_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Test Runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 34)(3, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "col", 27)(5, "col", 28)(6, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SearchDetailProjectComponent_ng_template_27_ng_template_2_tr_8_Template, 10, 11, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.testRuns);
  }
}
function SearchDetailProjectComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SearchDetailProjectComponent_ng_template_27_ng_template_0_Template, 9, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SearchDetailProjectComponent_ng_template_27_ng_template_1_Template, 9, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SearchDetailProjectComponent_ng_template_27_ng_template_2_Template, 9, 1, "ng-template", 24);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.testCases.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.milestones.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.testRuns.length);
  }
}
class SearchDetailProjectComponent {
  constructor(route, testCaseService, milestoneService, testRunService) {
    this.route = route;
    this.testCaseService = testCaseService;
    this.milestoneService = milestoneService;
    this.testRunService = testRunService;
    this.testCases = [];
    this.milestones = [];
    this.testRuns = [];
    this.project = {
      projectName: ''
    };
    this.searchParam = '';
  }
  ngOnInit() {
    const observableParams = this.route.params;
    const observableQueryParams = this.route.queryParams;
    observableParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatestWith)(observableQueryParams)).subscribe(([params, queryParams]) => {
      console.log(params);
      this.project.projectId = params['id'];
      console.log(this.project.projectId);
      if (!this.project.projectId) {
        return;
      }
      this.searchParam = queryParams['searchParam'];
      if (this.searchParam == undefined) {
        this.searchParam = '';
      }
      this.searchParam = this.searchParam.trim();
      this.testCaseService.findAllByProjectId(this.project.projectId).subscribe(testCases => {
        this.testCases = testCases.filter(testCase => testCase.caseName.includes(this.searchParam));
      });
      this.milestoneService.findAllByProjectId(this.project.projectId).subscribe(milestones => {
        this.milestones = milestones.filter(milestone => milestone.milestoneName.includes(this.searchParam));
      });
      this.testRunService.findAllByProjectId(this.project.projectId).subscribe(testRuns => {
        this.testRuns = testRuns.filter(testRun => testRun.runName.includes(this.searchParam));
      });
    });
  }
  static #_ = this.ɵfac = function SearchDetailProjectComponent_Factory(t) {
    return new (t || SearchDetailProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_test_case_service__WEBPACK_IMPORTED_MODULE_0__.TestCaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__.MilestoneService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_test_run_service__WEBPACK_IMPORTED_MODULE_2__.TestRunService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SearchDetailProjectComponent,
    selectors: [["app-search-detail-project"]],
    decls: 31,
    vars: 6,
    consts: [[2, "display", "flex", "height", "100%"], [3, "projectId", "getProject"], [2, "display", "flex", "flex-direction", "column"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/app-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.4.2008/css/autocomplete.css", "media", "all"], [1, "table", 2, "height", "100%"], ["id", "content", 1, "column", "content", "overflow-content"], ["id", "content-header", 1, "content-header", "content-header-default"], [1, "content-header-inner"], [1, "content-header-result"], [1, "content-header-id"], [1, "content-header-title", "page_title"], ["id", "content-inner", 1, "content-inner"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "sidebar-splitter", 1, "column", "splitter", "sidebar-splitter"], ["id", "sidebar", 1, "column", "sidebar", 2, "width", "250px"], [3, "ngIf"], [2, "margin-top", "1.5em"], [1, "grid"], [1, "box"], [1, "id"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "status", "entity-case"], [1, "link-noline", 3, "routerLink"], [3, "routerLink"], [1, "run-grid", "grid"], ["class", "hoverSensitive", 3, "id", 4, "ngFor", "ngForOf"], [1, "hoverSensitive", 3, "id"], [1, "status", "entity-milestone"], [1, "status", "entity-run"]],
    template: function SearchDetailProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "app-new-menu-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("getProject", function SearchDetailProjectComponent_Template_app_new_menu_project_getProject_1_listener($event) {
          return ctx.project = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-header")(4, "link", 3)(5, "link", 4)(6, "link", 5)(7, "link", 6)(8, "link", 7)(9, "link", 8)(10, "link", 9)(11, "link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18)(22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, SearchDetailProjectComponent_div_24_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, SearchDetailProjectComponent_ng_template_25_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, SearchDetailProjectComponent_ng_template_27_Template, 3, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "div", 22)(30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("projectId", ctx.project.projectId + "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("P", ctx.project.projectId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.project.projectName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.testCases.length && !ctx.milestones.length && !ctx.testRuns.length)("ngIfThen", _r1)("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shared_new_menu_project_new_menu_project_component__WEBPACK_IMPORTED_MODULE_3__.NewMenuProjectComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5431:
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





class SignUpComponent {
  constructor(authService, toastr, router) {
    this.authService = authService;
    this.toastr = toastr;
    this.router = router;
    this.user = {
      email: '',
      fullname: '',
      password: ''
    };
    this.confirmPassword = '';
    this.emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
    this.regexp = new RegExp(this.emailPattern);
  }
  submit() {
    this.authService.signup(this.user).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Create account success', 'Success');
        this.router.navigateByUrl('/login');
      },
      error: e => {
        console.log(e);
        this.toastr.error('Create account failed', 'Error');
      }
    });
  }
  disable() {
    return !this.regexp.test(this.user.email.trim()) || !this.user.email.trim() || !this.user.fullname.trim() || !this.user.password.trim() || this.user.password != this.confirmPassword;
  }
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["app-signup"]],
    decls: 58,
    vars: 8,
    consts: [["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/auth-modern-combined.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/font.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/drilldown.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/brand/style.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/brand/brand-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/assembla.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/banner-enterprise-modern.css", "media", "all"], ["type", "text/css", "rel", "stylesheet", "href", "https://static.testrail.io/7.5.6.3001/css/autocomplete.css", "media", "all"], ["id", "form", 1, "loginpage-form", 2, "margin", "auto", "padding-left", "0"], [1, "logo", "loginpage-logo"], ["routerLink", "/", "target", "_blank", 1, "logo-loginpage", 2, "background", "url('assets/logo.png') center center no-repeat"], ["id", "form-inner"], [1, "loginpage-installationname"], ["id", "content"], [1, "loginpage-login-text"], ["action", "index.php?/auth/login/L21pbGVzdG9uZXMvb3ZlcnZpZXcvMS1iNTk1YmU1YmQxMTdjNjQ3ZmFmMDRiN2JkYTI1NDcyZjNkMmY0NTdjZWM1MWQ0MzlhZTdmY2NmM2JhNWRhZmMz", "method", "post"], [2, "min-height", "24px"], [1, "form-group", 2, "padding-bottom", "10px"], [1, "login-inputx"], ["id", "name", "type", "text", "name", "name", "id", "name", 1, "login-input", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "login-label"], [1, "form-required"], ["id", "email", "type", "text", "name", "email", "id", "email", 1, "login-input", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "login-label"], [1, "form-group", 2, "padding-bottom", "10px", "margin-top", "-9px"], ["id", "password", "type", "password", "name", "password", "id", "password", "autocomplete", "off", 1, "login-input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "login-label"], ["id", "confirm-password", "type", "password", "name", "confirm-password", "id", "confirm-password", "autocomplete", "off", 1, "login-input", 3, "ngModel", "ngModelChange"], ["for", "confirm-password", 1, "login-label"], [1, "display-flex", 2, "margin-bottom", "40px"], [2, "float", "left"], ["id", "button_primary", 1, "loginpage-button-sso-disable", "loginpage-button-sso-disable-hover", "loginpage-button-sso-disable-active", 3, "disabled", "click"], [1, "single-sign-on"], [2, "display", "flex", "justify-content", "center"], [3, "routerLink"]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2)(3, "link", 3)(4, "link", 4)(5, "link", 5)(6, "link", 6)(7, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11)(12, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Test Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Create Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.user.fullname = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_29_listener($event) {
          return ctx.user.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24)(35, "div", 18)(36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_36_listener($event) {
          return ctx.user.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24)(42, "div", 18)(43, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_43_listener($event) {
          return ctx.confirmPassword = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Confirm Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_50_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 33)(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Already have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.disable() ? "cursor: not-allowed;" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disable());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/login");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["h1[_ngcontent-%COMP%]:after {\n  content: unset;\n}\n\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  box-shadow: 0 0 0px 1000px white inset;\n  -webkit-box-shadow: 0 0 0px 1000px white inset;\n}\n/*# sourceURL=webpack://./src/app/components/signup/signup.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaDE6YWZ0ZXIge1xuICBjb250ZW50OiB1bnNldDtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4IHdoaXRlIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4IHdoaXRlIGluc2V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7047:
/*!***************************************!*\
  !*** ./src/app/core/authenticator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);



class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(req);
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9891:
/*!****************************************!*\
  !*** ./src/app/core/base-paginator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePaginator": () => (/* binding */ BasePaginator)
/* harmony export */ });
class BasePaginator {
  constructor() {
    // BasePaginator() { }
    this.length = 0;
    this.pageSize = 5;
    this.pageIndex = 0;
    this.pageSizeOptions = [5, 10, 25];
    this.hidePageSize = false;
    this.showPageSizeOptions = true;
    this.showFirstLastButtons = true;
    this.disabled = false;
  }
  handlePageEvent(e, extraParams) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.refresh(extraParams);
  }
  getParams() {
    let params = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    };
    return params;
  }
}

/***/ }),

/***/ 6337:
/*!******************************!*\
  !*** ./src/app/core/mode.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mode": () => (/* binding */ Mode)
/* harmony export */ });
var Mode;
(function (Mode) {
  Mode["Create"] = "CREATE";
  Mode["Update"] = "UPDATE";
})(Mode || (Mode = {}));

/***/ }),

/***/ 7061:
/*!**********************************************!*\
  !*** ./src/app/services/activity.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityService": () => (/* binding */ ActivityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ActivityService {
  constructor(_http) {
    this._http = _http;
  }
  findAllByProjectId(projectId) {
    return this._http.get("/tms/api/v1/project/" + projectId + "/activity");
  }
  static #_ = this.ɵfac = function ActivityService_Factory(t) {
    return new (t || ActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ActivityService,
    factory: ActivityService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);




class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  static #_ = this.activeUser = {};
  getToken() {
    return this.getCookie('token');
  }
  getCookie(name) {
    const nameLenPlus = name.length + 1;
    return document.cookie.split(';').map(c => c.trim()).filter(cookie => {
      return cookie.substring(0, nameLenPlus) === `${name}=`;
    }).map(cookie => {
      return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null;
  }
  login(user) {
    return this.http.post('/tms/api/v1/login', user, {
      responseType: 'text'
    });
  }
  load() {
    return this.http.get('/tms/api/v1/login').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(user => {
      AuthService.activeUser = user;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.log(error);
      if (['/tms/login', '/tms/signup'].includes(window.location.pathname)) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
      }
      return this.router.navigateByUrl('/login');
    }));
  }
  isActive(functionalityName) {
    return AuthService.activeUser.functionalities?.find(f => f.functionalityName?.toUpperCase() === functionalityName.toUpperCase()) ? true : false;
  }
  static authServiceFactory(authService) {
    return () => authService.load();
  }
  signup(user) {
    return this.http.post("/tms/api/v1/signup", user, {
      responseType: 'text'
    });
  }
  static #_2 = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6341:
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberService": () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class MemberService {
  constructor(_http) {
    this._http = _http;
  }
  findAllByProjectId(projectId) {
    return this._http.get("/tms/api/v1/project/" + projectId + "/project-user");
  }
  delete(projectUserId) {
    return this._http.delete("/tms/api/v1/project-user/" + projectUserId);
  }
  create(projectUser) {
    return this._http.post("/tms/api/v1/project-user", projectUser, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function MemberService_Factory(t) {
    return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MemberService,
    factory: MemberService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8964:
/*!***********************************************!*\
  !*** ./src/app/services/milestone.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilestoneService": () => (/* binding */ MilestoneService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class MilestoneService {
  constructor(_http) {
    this._http = _http;
  }
  addMilestone(milestone) {
    return this._http.post("/tms/api/v1/milestone", milestone, {
      responseType: 'text'
    });
  }
  findAllByProjectId(projectId) {
    return this._http.get("/tms/api/v1/project/" + projectId + "/milestone");
  }
  findByMilestoneId(milestoneId) {
    return this._http.get("/tms/api/v1/milestone/" + milestoneId);
  }
  update(milestone) {
    return this._http.put("/tms/api/v1/milestone", milestone, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function MilestoneService_Factory(t) {
    return new (t || MilestoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MilestoneService,
    factory: MilestoneService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4391:
/*!**********************************************!*\
  !*** ./src/app/services/priority.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityService": () => (/* binding */ PriorityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class PriorityService {
  constructor(_http) {
    this._http = _http;
  }
  findAll() {
    return this._http.get("/tms/api/v1/priority");
  }
  static #_ = this.ɵfac = function PriorityService_Factory(t) {
    return new (t || PriorityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PriorityService,
    factory: PriorityService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 354:
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ProjectService {
  constructor(_http) {
    this._http = _http;
  }
  getProjects(params, projectName) {
    return this._http.get(`/tms/api/v1/project?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&projectName=${projectName}`);
  }
  addProject(project) {
    return this._http.post("/tms/api/v1/project", project);
  }
  findByProjectId(projectId) {
    return this._http.get(`/tms/api/v1/project/${projectId}`);
  }
  static #_ = this.ɵfac = function ProjectService_Factory(t) {
    return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProjectService,
    factory: ProjectService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2820:
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ReportService {
  constructor(_http) {
    this._http = _http;
  }
  findByReportId(reportId) {
    return this._http.get("/tms/api/v1/report/" + reportId);
  }
  findAllByProjectId(projectId) {
    return this._http.get("/tms/api/v1/project/" + projectId + "/report");
  }
  addReport(report) {
    return this._http.post("/tms/api/v1/report", report, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function ReportService_Factory(t) {
    return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ReportService,
    factory: ReportService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5630:
/*!********************************************!*\
  !*** ./src/app/services/result.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultService": () => (/* binding */ ResultService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ResultService {
  constructor(_http) {
    this._http = _http;
  }
  findAllByTestRunId(testRunId) {
    return this._http.get("/tms/api/v1/test-run/" + testRunId + "/result");
  }
  update(formData) {
    return this._http.put("/tms/api/v1/result", formData, {
      responseType: 'text'
    });
  }
  findByResultId(resultId) {
    return this._http.get("/tms/api/v1/result/" + resultId);
  }
  static #_ = this.ɵfac = function ResultService_Factory(t) {
    return new (t || ResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ResultService,
    factory: ResultService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6888:
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class RoleService {
  constructor(_http) {
    this._http = _http;
  }
  findAll() {
    return this._http.get("/tms/api/v1/role");
  }
  static #_ = this.ɵfac = function RoleService_Factory(t) {
    return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RoleService,
    factory: RoleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1588:
/*!*********************************************!*\
  !*** ./src/app/services/section.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionService": () => (/* binding */ SectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class SectionService {
  constructor(_http) {
    this._http = _http;
  }
  findAllByProjectId(projectId) {
    return this._http.get("/tms/api/v1/section/" + projectId);
  }
  create(user) {
    return this._http.post("/tms/api/v1/section", user, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function SectionService_Factory(t) {
    return new (t || SectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SectionService,
    factory: SectionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1051:
/*!***********************************************!*\
  !*** ./src/app/services/test-case.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestCaseService": () => (/* binding */ TestCaseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class TestCaseService {
  constructor(_http) {
    this._http = _http;
  }
  addTestCase(testCase) {
    return this._http.post("/tms/api/v1/test-case", testCase, {
      responseType: 'text'
    });
  }
  findAllByProjectId(projectId) {
    return this._http.get("/tms/api/v1/project/" + projectId + "/test-case");
  }
  findByTestCaseId(testCaseId) {
    return this._http.get("/tms/api/v1/test-case/" + testCaseId);
  }
  update(testCase) {
    return this._http.put("/tms/api/v1/test-case", testCase, {
      responseType: 'text'
    });
  }
  delete(testCaseId) {
    return this._http.delete("/tms/api/v1/test-case/" + testCaseId);
  }
  importTestCases(projectId, file) {
    let formData = new FormData();
    formData.append('file', file);
    return this._http.post("/tms/api/v1/project/" + projectId + "/test-case", formData, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function TestCaseService_Factory(t) {
    return new (t || TestCaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TestCaseService,
    factory: TestCaseService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5830:
/*!**********************************************!*\
  !*** ./src/app/services/test-run.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestRunService": () => (/* binding */ TestRunService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class TestRunService {
  constructor(_http) {
    this._http = _http;
  }
  create(testRun) {
    return this._http.post('/tms/api/v1/test-run', testRun, {
      responseType: 'text'
    });
  }
  findAllByProjectId(projectId) {
    return this._http.get('/tms/api/v1/project/' + projectId + '/test-run');
  }
  findByTestRunId(testRunId) {
    return this._http.get('/tms/api/v1/test-run/' + testRunId);
  }
  update(testRun) {
    return this._http.put('/tms/api/v1/test-run', testRun, {
      responseType: 'text'
    });
  }
  findAllByMilestoneId(projectId) {
    return this._http.get('/tms/api/v1/milestone/' + projectId + '/test-run');
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    let temp = this.data;
    this.clearData();
    return temp;
  }
  clearData() {
    this.data = undefined;
  }
  static #_ = this.ɵfac = function TestRunService_Factory(t) {
    return new (t || TestRunService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TestRunService,
    factory: TestRunService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class UserService {
  constructor(_http) {
    this._http = _http;
  }
  getUsers() {
    return this._http.get("/tms/api/v1/user");
  }
  create(user) {
    return this._http.post("/tms/api/v1/user", user, {
      responseType: 'text'
    });
  }
  update(user) {
    return this._http.put("/tms/api/v1/user", user, {
      responseType: 'text'
    });
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





class HeaderComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.projectId = 0;
    this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.name = '';
    this.top = '';
    this.left = '';
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
    });
    this.route.queryParams.subscribe(queryParams => {
      this.name = queryParams['searchParam'];
      if (this.name == undefined) {
        this.name = '';
      }
    });
  }
  openDropDown(e) {
    var target = e.target || e.srcElement || e.currentTarget;
    console.log(target.getBoundingClientRect());
    this.left = target.getBoundingClientRect()['x'] - 1796 + 'px';
    this.top = target.getBoundingClientRect()['y'] + 1676 + 'px';
  }
  closeDropDown() {
    this.left = '';
    this.top = '';
  }
  getFullname() {
    console.log('activeUser' + src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser);
    return src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser.fullname;
  }
  logout() {
    document.cookie = 'token=;path=/tms;Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser = {};
    return this.router.navigateByUrl('/login');
  }
  submit() {
    if (['/tms/', '/tms'].includes(window.location.pathname)) {
      this.onSearch.emit(this.name);
    } else {
      this.router.navigateByUrl('/search/' + this.projectId + '?searchParam=' + this.name);
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    outputs: {
      onSearch: "onSearch"
    },
    decls: 19,
    vars: 2,
    consts: [["data-controller", "layout--navbar", "dusk", "navbar", 1, "navbar"], [1, "navbar__menu"], [1, "navbar__menu__item--selected"], [1, "fad", "fa-cog", "icon-navbar-admin", "fa-fw"], [1, "navbar__trial"], [2, "background", "green", "padding", "1px"], ["method", "post", 2, "display", "inline", 3, "submit"], ["type", "text", "name", "query", "tabindex", "-1", 1, "top-search-control", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], [1, "navbar__user"], [1, ""], ["id", "logout", "data-content", "Logout", 2, "color", "#fff", "text-decoration", "none", "background-color", "transparent", "cursor", "pointer", "border", "0", 3, "click"], [1, "fad", "fa-sign-out", "icon-sidebar-users", "fa-fw"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "ul")(4, "li", 2)(5, "a")(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function HeaderComponent_Template_form_submit_11_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "ul")(15, "li", 9)(16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_16_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getFullname());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["#logout[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n/*# sourceURL=webpack://./src/app/shared/header/header.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3V0OmhvdmVyIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3695:
/*!***************************************************************!*\
  !*** ./src/app/shared/menu-project/menu-project.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuProjectComponent": () => (/* binding */ MenuProjectComponent)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = function (a1) {
  return ["/overview", a1];
};
const _c1 = function (a1) {
  return ["/milestones", a1];
};
const _c2 = function (a1) {
  return ["/test-runs", a1];
};
const _c3 = function (a1) {
  return ["/test-cases", a1];
};
const _c4 = function (a1) {
  return ["/reports", a1];
};
class MenuProjectComponent {
  constructor(projectService) {
    this.projectService = projectService;
    this.project = {
      projectName: ''
    };
    this.getProject = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  get projectId() {
    return this.project.projectId + '';
  }
  set projectId(value) {
    this.project.projectId = parseInt(value);
    if (this.project.projectId) {
      this.projectService.findByProjectId(parseInt(this.projectId)).subscribe(project => {
        this.project.projectName = project.projectName;
        this.getProject.emit(this.project);
      });
    }
  }
  getProjectName() {
    return this.project.projectName;
  }
  ngOnInit() {}
  getFullname() {
    console.log('activeUser' + _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser);
    return _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser.fullname;
  }
  static #_ = this.ɵfac = function MenuProjectComponent_Factory(t) {
    return new (t || MenuProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuProjectComponent,
    selectors: [["app-menu-project"]],
    inputs: {
      projectId: "projectId"
    },
    outputs: {
      getProject: "getProject"
    },
    decls: 45,
    vars: 17,
    consts: [["id", "menu-project"], ["id", "top"], ["id", "top-logo"], ["routerLink", "javascript:void(0)", "id", "bannerLink"], ["src", "https://static.testrail.io/7.5.5.2003/images/layout/testrail-logo.svg"], [1, "top-panel"], [1, "top-panel-inner"], [1, "top-menu", "pull-right"], [1, "top-menu-item"], ["id", "navigation-user", "routerLink", "#userDropdown", 1, "dropdownLink"], [1, "navigation-username"], [1, "navigation-username", 2, "cursor", "pointer"], [1, "top-search"], ["action", "index.php?/search/index/1", "method", "post", 2, "display", "inline"], ["type", "hidden", "name", "_token", "value", "qGt3kRwAo24ugb2redt4"], ["type", "text", "name", "query", "tabindex", "-1", 1, "top-search-control"], [1, "top-section", "top-section-with-return", "text-ppp"], ["id", "return"], ["id", "navigation-dashboard-top", "routerLink", "/", 1, "link-noline"], ["id", "navigation-project", "routerLink", "/overview", 1, "link-noline"], ["id", "newsletterForm", "target", "_blank", "action", "https://secure.gurock.com/customers/testrail/newsletter?email=", "method", "post"], ["name", "cm-ahdml-ahdml", "id", "newsletter", "type", "hidden"], ["id", "header"], [1, "header-menu"], [1, "header-menu-item"], ["tabindex", "-1", "id", "navigation-overview", 3, "routerLink"], ["tabindex", "-1", "id", "navigation-milestones", 3, "routerLink"], ["tabindex", "-1", "id", "navigation-runs", 3, "routerLink"], ["tabindex", "-1", "id", "navigation-suites", 3, "routerLink"], ["tabindex", "-1", "id", "navigation-reports", 3, "routerLink"]],
    template: function MenuProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9)(11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 8)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 14)(19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "span", 17)(22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u2190 Return to Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22)(29, "ul", 23)(30, "li", 24)(31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li", 24)(34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 24)(37, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Test Runs & Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 24)(40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Test Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 24)(43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getFullname());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getProjectName());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c2, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c3, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c4, ctx.projectId));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6534:
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function MenuComponent_li_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
  }
}
class MenuComponent {
  constructor() {
    this.menu = [{
      'id': 'admin_dashboard',
      'label': 'Dashboard',
      'routerLink': ['/']
    }];
  }
  ngOnInit() {}
  getFullname() {
    console.log('activeUser' + src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser);
    return src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser.fullname;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 48,
    vars: 2,
    consts: [["id", "menu"], ["id", "top"], ["id", "top-logo"], ["id", "bannerLink"], ["src", "https://static.testrail.io/7.5.4.2008/images/layout/testrail-logo.svg"], ["id", "enterpriseBubble", 1, "bubble", "estimate-bubble"], ["href", "javascript: void(0);", 1, "close", "close-hover"], [1, "modules", "modules_tab_fullsection"], [1, "modules_tab_lefthalf"], ["src", "https://static.testrail.io/7.5.4.2008/images/banner/editionsimage.png"], [1, "modules_tab_righthalf"], ["id", "logo_confirm"], ["id", "logo_banner_desc"], [1, "hd_sb_txt"], [2, "color", "#979797"], [1, "top-panel"], [1, "top-panel-inner"], [1, "top-menu", "pull-right"], [1, "top-menu-item"], [1, "navigation-username"], [1, "navigation-username", 2, "cursor", "pointer"], [1, "top-search"], ["action", "index.php?/search/index/1", "method", "post", 2, "display", "inline"], ["type", "hidden", "name", "_token", "value", "qGt3kRwAo24ugb2redt4"], ["type", "text", "name", "query", "tabindex", "-1", 1, "top-search-control"], [1, "top-section", "text-ppp"], ["id", "newsletterForm", "target", "_blank", "action", "https://secure.gurock.com/customers/testrail/newsletter?email=", "method", "post"], ["name", "cm-ahdml-ahdml", "id", "newsletter", "type", "hidden"], ["id", "header"], [1, "header-menu"], ["class", "header-menu-item", 4, "ngFor", "ngForOf"], [1, "header-menu-item"], ["tabindex", "-1", 3, "routerLink"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Your edition:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Test Management System Professional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Enable enterprise-grade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "security");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "performance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Explore Enterprise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15)(29, "div", 16)(30, "ul", 17)(31, "li", 18)(32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 18)(35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 21)(38, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 23)(40, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Test Management System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28)(46, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, MenuComponent_li_47_Template, 3, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getFullname());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6303:
/*!***********************************************************************!*\
  !*** ./src/app/shared/new-menu-project/new-menu-project.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMenuProjectComponent": () => (/* binding */ NewMenuProjectComponent)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







function NewMenuProjectComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul")(3, "li")(4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Users & roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
const _c0 = function (a1) {
  return ["/overview", a1];
};
const _c1 = function (a1) {
  return ["/milestones", a1];
};
const _c2 = function (a1) {
  return ["/test-runs", a1];
};
const _c3 = function (a1) {
  return ["/test-cases", a1];
};
const _c4 = function (a1) {
  return ["/reports", a1];
};
const _c5 = function (a1) {
  return ["/members", a1];
};
class NewMenuProjectComponent {
  constructor(projectService, authService) {
    this.projectService = projectService;
    this.authService = authService;
    this.selectedMenu = 'overview';
    this.project = {
      projectName: ''
    };
    this.getProject = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  get projectId() {
    return this.project.projectId + '';
  }
  set projectId(value) {
    this.project.projectId = parseInt(value);
    if (this.project.projectId) {
      this.projectService.findByProjectId(parseInt(this.projectId)).subscribe(project => {
        if (project.endDate instanceof Array) {
          project.endDate = project.endDate[0] + "-" + String(project.endDate[1]).padStart(2, '0') + "-" + String(project.endDate[2]).padStart(2, '0');
        }
        if (project.startDate instanceof Array) {
          project.startDate = project.startDate[0] + "-" + String(project.startDate[1]).padStart(2, '0') + "-" + String(project.startDate[2]).padStart(2, '0');
        }
        this.project.projectName = project.projectName;
        this.project.startDate = project.startDate;
        this.project.endDate = project.endDate;
        this.getProject.emit(this.project);
      });
    }
  }
  getProjectName() {
    return this.project.projectName;
  }
  getFullname() {
    console.log('activeUser' + _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser);
    return _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.activeUser.fullname;
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function NewMenuProjectComponent_Factory(t) {
    return new (t || NewMenuProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NewMenuProjectComponent,
    selectors: [["app-new-menu-project"]],
    inputs: {
      selectedMenu: "selectedMenu",
      projectId: "projectId"
    },
    outputs: {
      getProject: "getProject"
    },
    decls: 59,
    vars: 31,
    consts: [["rel", "stylesheet", "type", "text/css", "data-turbolinks-track", "reload", "href", "/tms/assets/all.css", "crossorigin", "anonymous"], ["rel", "stylesheet", "type", "text/css", "data-turbolinks-track", "reload", "href", "/tms/assets/app.css", "crossorigin", "anonymous"], ["data-controller", "layout--sidebar", "data-sidebar", "admin", "dusk", "sidebar", 1, "sidebar"], [1, "sidebar__sticky", 2, "background", "#FF9933", "height", "inherit"], [1, "sidebar__menu"], ["data-sidebar", "admin", 1, "sidebar__menu__nav", "sidebar__menu__nav--full"], [1, "sidebar__menu__nav__header"], [1, ""], ["routerLink", "/", "dusk", "overviewLink", "data-content", "Overview"], [1, "fad", "fa-chart-bar", "icon-sidebar-overview", "fa-fw"], [3, "routerLink"], [1, "fad", "fa-home", "icon-sidebar-overview", "fa-fw"], [1, "fad", "fa-paste", "icon-sidebar-milestone", "fa-fw"], [1, "fad", "fa-th-large", "icon-sidebar-test", "fa-fw"], [1, "fad", "fa-project-diagram", "icon-sidebar-workflows", "fa-fw"], [1, "fad", "fa-file", "icon-sidebar-workflows", "fa-fw"], [1, "fad", "fa-users", "icon-sidebar-users", "fa-fw"], [3, "ngIf"], [1, "sidebar__menu__nav", "sidebar__menu__nav--compact"], ["data-action", "click->layout--sidebar#doCompactMenu", "dusk", "compactMenuIcon"], [1, "far", "fa-bars", "icon-sidebar-menu", "fa-fw"], [1, "sidebar__footer"], ["dusk", "collapseIcon", "data-action", "click->layout--sidebar#doCollapse", 1, "sidebar__footer__collapse"], [1, "far", "fa-angle-left", "icon-sidebar-collapse"], ["dusk", "expandIcon", "data-action", "click->layout--sidebar#doExpand", 1, "sidebar__footer__expand"], [1, "far", "fa-angle-right", "icon-sidebar-expand"], ["routerLink", "/users-roles", "data-content", "Users & roles"]],
    template: function NewMenuProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0)(1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul")(9, "li", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul")(17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li")(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li")(28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Test Runs & Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li")(33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Test Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, NewMenuProjectComponent_ng_template_47_Template, 8, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 18)(49, "ul")(50, "li")(51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 21)(54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.selectedMenu == "overview" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.selectedMenu == "milestone" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c1, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.selectedMenu == "test-runs" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c2, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.selectedMenu == "test-cases" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c3, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.selectedMenu == "reports" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c4, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.selectedMenu == "members" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c5, ctx.projectId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActive("LIST_USER_ROLE"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.sidebar.sidebar--collapsed[_ngcontent-%COMP%] {\n  width: 56px;\n}\n\n\n  .overlay-container {\n  overscroll-behavior: unset !important;\n  display: unset !important;\n  position: unset !important;\n  height: unset !important;\n  width: unset !important;\n  background: unset !important;\n  overflow: unset !important;\n  opacity: unset !important;\n  transition: unset !important;\n}\n\n.sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active, .sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar__footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.sidebar__menu__nav__item--selected[_ngcontent-%COMP%] {\n  background: #ffc68c;\n}\n\n.sidebar__footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #ffc68c;\n}\n/*# sourceURL=webpack://./src/app/shared/new-menu-project/new-menu-project.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25ldy1tZW51LXByb2plY3QvbmV3LW1lbnUtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQSw4RUFBQTtBQUNBO0VBQ0UscUNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7Ozs7O0VBS0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLnNpZGViYXIuc2lkZWJhci0tY29sbGFwc2VkIHtcbiAgd2lkdGg6IDU2cHg7XG59XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjo6bmctZGVlcCAub3ZlcmxheS1jb250YWluZXIge1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyX19tZW51X19uYXYgPiB1bCA+IGxpID4gYTphY3RpdmUsXG4uc2lkZWJhcl9fbWVudV9fbmF2ID4gdWwgPiBsaSA+IGE6Zm9jdXMsXG4uc2lkZWJhcl9fbWVudV9fbmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIsXG4uc2lkZWJhcl9fZm9vdGVyID4gYTpob3Zlcixcbi5zaWRlYmFyX19tZW51X19uYXYgPiB1bCA+IGxpLnNpZGViYXJfX21lbnVfX25hdl9faXRlbS0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZmZjNjhjO1xufVxuXG4uc2lkZWJhcl9fZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmM2OGM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9356:
/*!*******************************************************!*\
  !*** ./src/app/shared/new-menu/new-menu.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMenuComponent": () => (/* binding */ NewMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function NewMenuComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul")(3, "li")(4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Users & roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.selectedMenu == "users-roles" ? "sidebar__menu__nav__item--selected" : "");
  }
}
class NewMenuComponent {
  constructor(authService) {
    this.authService = authService;
    this.selectedMenu = 'dashboard';
  }
  isActive(functionalityName) {
    return this.authService.isActive(functionalityName);
  }
  static #_ = this.ɵfac = function NewMenuComponent_Factory(t) {
    return new (t || NewMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NewMenuComponent,
    selectors: [["app-new-menu"]],
    inputs: {
      selectedMenu: "selectedMenu"
    },
    decls: 21,
    vars: 3,
    consts: [["rel", "stylesheet", "type", "text/css", "data-turbolinks-track", "reload", "href", "/tms/assets/all.css", "crossorigin", "anonymous"], ["rel", "stylesheet", "type", "text/css", "data-turbolinks-track", "reload", "href", "/tms/assets/app.css", "crossorigin", "anonymous"], ["data-controller", "layout--sidebar", "data-sidebar", "admin", "data-views", "{\"layout.sidebar_admin_menu\":\"<div class=\\\"popup\\n         popup--scrolling \\\"\\n          dusk-loaded=\\\"compactAdminMenu\\\"        \\n    \\n\\n  >\\n    <div class=\\\"popup__border\\\">\\n\\n    <div class=\\\"popup__menu\\\">\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\\"\\n    dusk=\\\"overviewLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-home icon-sidebar-overview fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Overview<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/projects\\\"\\n    dusk=\\\"projectsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-paste icon-sidebar-projects fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Projects<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/fields\\\"\\n    dusk=\\\"fieldsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-th-large icon-sidebar-fields fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Fields<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/workflows\\\"\\n    dusk=\\\"workflowsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-project-diagram icon-sidebar-workflows fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Workflows<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/statuses\\\"\\n    dusk=\\\"statusesLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-check-circle icon-sidebar-statuses fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Statuses<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/milestones\\\"\\n    dusk=\\\"milestonesLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-flag icon-sidebar-milestones fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Phase<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/configs\\\"\\n    dusk=\\\"configurationsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-layer-group icon-sidebar-configurations fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Configurations<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/integrations\\\"\\n    dusk=\\\"integrationsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-puzzle-piece icon-sidebar-integrations fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Integrations<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/automation\\\"\\n    dusk=\\\"automationLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-cogs icon-sidebar-automation fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Automation<\\/div>\\n  <\\/a>\\n    <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/users\\\"\\n    dusk=\\\"usersLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-users icon-sidebar-users fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Users & roles<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/auth\\\"\\n    dusk=\\\"authLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-lock-alt icon-sidebar-auth fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Authentication<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/auditing\\\"\\n    dusk=\\\"auditingLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-list-alt icon-sidebar-auditing fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Auditing<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/subscription\\\"\\n    dusk=\\\"subscriptionLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-credit-card icon-sidebar-subscription fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Subscription<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/exports\\\"\\n    dusk=\\\"exportsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-database icon-sidebar-exports fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Exports<\\/div>\\n  <\\/a>\\n  <a class=\\\"popup__menu__link-item\\\" href=\\\"https:\\/\\/csascas.testmo.net\\/admin\\/settings\\\"\\n    dusk=\\\"settingsLink\\\">\\n    <div class=\\\"popup__menu__item__icon\\\"><i class=\\\"fad fa-wrench icon-sidebar-settings fa-fw\\\"><\\/i><\\/div>\\n    <div class=\\\"popup__menu__item__text\\\">Settings<\\/div>\\n  <\\/a>\\n  <\\/div>\\n\\n    <div class=\\\"popup__pointer\\\"><\\/div>\\n  <\\/div>\\n  <\\/div>\\n\\n\"}", "dusk", "sidebar", 1, "sidebar"], [1, "sidebar__sticky", 2, "background", "#FF9933", "height", "inherit"], [1, "sidebar__menu"], ["data-sidebar", "admin", 1, "sidebar__menu__nav", "sidebar__menu__nav--full"], [1, "sidebar__menu__nav__header"], ["routerLink", "/", "dusk", "overviewLink", "data-content", "Overview"], [1, "fad", "fa-chart-bar", "icon-sidebar-overview", "fa-fw"], [3, "ngIf"], [1, "sidebar__footer"], ["dusk", "collapseIcon", "data-action", "click->layout--sidebar#doCollapse", 1, "sidebar__footer__collapse"], [1, "far", "fa-angle-left", "icon-sidebar-collapse"], ["dusk", "expandIcon", "data-action", "click->layout--sidebar#doExpand", 1, "sidebar__footer__expand"], [1, "far", "fa-angle-right", "icon-sidebar-expand"], ["routerLink", "/users-roles", "data-content", "Users & roles"], [1, "fad", "fa-users", "icon-sidebar-users", "fa-fw"]],
    template: function NewMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0)(1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NewMenuComponent_ng_template_14_Template, 8, 2, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.selectedMenu == "dashboard" ? "sidebar__menu__nav__item--selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive("LIST_USER_ROLE"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.sidebar.sidebar--collapsed[_ngcontent-%COMP%] {\n  width: 56px;\n}\n\n\n  .overlay-container {\n  overscroll-behavior: unset !important;\n  display: unset !important;\n  position: unset !important;\n  height: unset !important;\n  width: unset !important;\n  background: unset !important;\n  overflow: unset !important;\n  opacity: unset !important;\n  transition: unset !important;\n}\n\n.sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active, .sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar__footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar__menu__nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.sidebar__menu__nav__item--selected[_ngcontent-%COMP%] {\n  background: #ffc68c;\n}\n\n.sidebar__footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #ffc68c;\n}\n/*# sourceURL=webpack://./src/app/shared/new-menu/new-menu.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25ldy1tZW51L25ldy1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBLDhFQUFBO0FBQ0E7RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTs7Ozs7RUFLRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgd2lkdGg6IDIyMHB4O1xufVxuXG4uc2lkZWJhci5zaWRlYmFyLS1jb2xsYXBzZWQge1xuICB3aWR0aDogNTZweDtcbn1cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOjpuZy1kZWVwIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1bnNldCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLnNpZGViYXJfX21lbnVfX25hdiA+IHVsID4gbGkgPiBhOmFjdGl2ZSxcbi5zaWRlYmFyX19tZW51X19uYXYgPiB1bCA+IGxpID4gYTpmb2N1cyxcbi5zaWRlYmFyX19tZW51X19uYXYgPiB1bCA+IGxpID4gYTpob3Zlcixcbi5zaWRlYmFyX19mb290ZXIgPiBhOmhvdmVyLFxuLnNpZGViYXJfX21lbnVfX25hdiA+IHVsID4gbGkuc2lkZWJhcl9fbWVudV9fbmF2X19pdGVtLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmM2OGM7XG59XG5cbi5zaWRlYmFyX19mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmYzY4Yztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SidebarComponent {
  selectSide(index) {
    return index;
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 7,
    vars: 0,
    consts: [[1, "sidebar-inner", 2, "white-space", "normal !important"], [2, "margin", "0"], [1, "sidebar-menu"], [1, "sidebar-menu-item"], ["routerLink", "/project/add", "id", "navigation-sub-projects", 3, "click"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage projects, users and global settings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2)(4, "li", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_5_listener() {
          return ctx.selectSide(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map