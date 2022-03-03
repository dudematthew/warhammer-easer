$(document).ready(function () {

    // multiselect activation
    $(function() {
        $('select[multiple]').selectize();
      });

    $(".function-random-select").click(function () {
        var select = document.querySelector("#" + this.value);
        var items = select.getElementsByTagName('option');
        // var index = Math.floor(Math.random() * items.length) + 1;
        let index = randomizer.GetRandomNumber(1, items.length);

        console.log(index);

        if (index === false) {
            
        } else {
            select.value = index;
        }
    });

    setTimeout(function () {
        $(".pageloader").removeClass("is-active");
    }, 1000);

    // TODO: 
    $(".function-output-clear").click(function () {
        var select = document.querySelector("#" + this.value);
        var items = select.getElementsByTagName('option');

        items.value = "";
    });

    $('input[type="number"]').change(function () {
        console.log("yes");
    });

    // TODO: 
    // $("textarea.textarea-list").on('input', function () {
    //     this.value = this.value.replace(/[\r\n][(^)(\b\n· \b)]/g, "\n· ");
    // })

    // .button-checkbox -------------------------

    function GetButtonCheckboxClassType (e) {
        if (e.classList.contains("button-checkbox-danger"))
            return "is-danger";
    
        if (e.classList.contains("button-checkbox-warning"))
            return "is-warning";

        if (e.classList.contains("button-checkbox-info"))
            return "is-info";

        if (e.classList.contains("button-checkbox-primary"))
            return "is-primary";

        if (e.classList.contains("button-checkbox-black"))
            return "is-black";

        return "is-success";
    }

    $(".button-checkbox").each(function() {
        if (this.value == "on")
            this.classList.add(GetButtonCheckboxClassType(this));
        else
            this.value = "off";
    });

    $(".button-checkbox").click(function (e) {
        if (this.value == "on")
            this.value = "off";
        else
            this.value = "on";

        if (this.value == "on")
            this.classList.add(GetButtonCheckboxClassType(this));
        else
            this.classList.remove(GetButtonCheckboxClassType(this));
    });

    // modal buttons ----------------------------

    $(".modal-button").click(function() {
      let target = $(this).data("target");
      $("html").addClass("is-clipped");
      $("#" + target).addClass("is-active");
   });
   
  $("[aria-label]").click(function() {
    let aria = $(this).attr('aria-label');
    if (aria.includes("modal-close")) {
      let target = $(this).data("target");
      $("html").removeClass("is-clipped");
      $("#" + target).removeClass("is-active");
    }
  });

});

let tabsWithContent = (function () {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');
  
    let deactvateAllTabs = function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('is-active');
      });
    };
  
    let hideTabsContent = function () {
      tabsContent.forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
    };
  
    let activateTabsContent = function (tab) {
      tabsContent[getIndex(tab)].classList.add('is-active');
    };
  
    let getIndex = function (el) {
      return [...el.parentElement.children].indexOf(el);
    };
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        deactvateAllTabs();
        hideTabsContent();
        tab.classList.add('is-active');
        activateTabsContent(tab);
      });
    })
  
    tabs[0].click();
  })();
