angular.module("myAppModuleName").component("sovendusBanner", {
  bindings: {
    trafficSourceNumber: "@",
    trafficMediumNumber: "@",
    sessionId: "@",
    timestamp: "@",
    orderId: "@",
    orderValue: "@",
    orderCurrency: "@",
    usedCouponCode: "@",
    consumerSalutation: "@",
    consumerFirstName: "@",
    consumerLastName: "@",
    consumerEmail: "@",
    consumerStreet: "@",
    consumerStreetNumber: "@",
    consumerCity: "@",
    consumerCountry: "@",
    consumerZipcode: "@",
    consumerYearOfBirth: "@",
  },
  template: `
    <div id="sovendus-integration-container-{{ $ctrl.sovDivId }}"></div>
  `,
  controller: function ($scope) {
    window.sovDivId = 1 + (window.sovDivId || 0);
    this.sovDivId = window.sovDivId;
    this.$onInit = function () {
      window.sovIframes = window.sovIframes || [];
      console.log("testst", $scope);
      window.sovIframes.push({
        trafficSourceNumber: $scope.$ctrl.trafficSourceNumber,
        trafficMediumNumber: $scope.$ctrl.trafficMediumNumber,
        sessionId: $scope.$ctrl.sessionId,
        timestamp: $scope.$ctrl.timestamp,
        orderId: $scope.$ctrl.orderId,
        orderValue: $scope.$ctrl.orderValue,
        orderCurrency: $scope.$ctrl.orderCurrency,
        usedCouponCode: $scope.$ctrl.usedCouponCode,
        iframeContainerId: "sovendus-integration-container-" + window.sovDivId,
        integrationType: "angularjs-1.0.0",
      });
      window.sovConsumer = {
        consumerSalutation: $scope.$ctrl.consumerSalutation,
        consumerFirstName: $scope.$ctrl.consumerFirstName,
        consumerLastName: $scope.$ctrl.consumerLastName,
        consumerEmail: $scope.$ctrl.consumerEmail,
        consumerStreet: $scope.$ctrl.consumerStreet,
        consumerStreetNumber: $scope.$ctrl.consumerStreetNumber,
        consumerCity: $scope.$ctrl.consumerCity,
        consumerCountry: $scope.$ctrl.consumerCountry,
        consumerZipcode: $scope.$ctrl.consumerZipcode,
        consumerYearOfBirth: $scope.$ctrl.consumerYearOfBirth,
      };
      const body = document.getElementsByTagName("body")[0];
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://api.sovendus.com/sovabo/common/js/flexibleIframe.js";
      script.type = "text/javascript";
      body.appendChild(script);
    };
  },
});
