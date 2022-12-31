var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");

var subType = "basic"; //default value for the Subscription drop-down list.
var subDuration = 1; //default value for the Duration drop-down list.

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //monthly cost for a basic subscr (selected by default);
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }

  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month(s) ${subType} plan for $${total}.`;
};
