function AppViewModel() {
    this.accountId = "admin";
    this.role = "管理员";
}
ko.applyBindings(new AppViewModel());

