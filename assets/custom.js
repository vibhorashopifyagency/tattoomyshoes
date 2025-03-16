$("#custom-sizing-options").on("click", (event) => {
    event.preventDefault();
    if ($('.custom-option-sizing--container').css('display') === 'none') {
        $(".custom-option-sizing--container").show(300);
        $("#gender-optional").attr("name", "properties[Gender]");
        $("#custom-options-enabled").attr("name", "properties[custom]");

        if($("#gender-optional").val() == 'Men') {
            if($("#slip-on__men")) {
                $("#slip-on__men").attr("name", "properties[Size]").show();
                $("#slip-on__women").removeAttr("name", "properties[Size]").hide();
            }

            if($("#high-tops__men")) {
                $("#high-tops__men").attr("name", "properties[Size]").show();
                $("#high-tops__women").removeAttr("name", "properties[Size]").hide();
            }

            if($("#boots__men")) {
                $("#boots__men").attr("name", "properties[Size]").show();
                $("#boots__women").removeAttr("name", "properties[Size]").hide();
            }
        }
        if($("#gender-optional").val() == 'Women') {
            if($("#slip-on__women")) {
                $("#slip-on__women").attr("name", "properties[Size]").show();
                $("#slip-on__men").removeAttr("name", "properties[Size]").hide();
            }

            if($("#high-tops__women")) {
                $("#high-tops__women").attr("name", "properties[Size]").show();
                $("#high-tops__men").removeAttr("name", "properties[Size]").hide();
            }

            if($("#boots__women")) {
                $("#boots__women").attr("name", "properties[Size]").show();
                $("#boots__men").removeAttr("name", "properties[Size]").hide();
            }
        }

    } else {
        $(".custom-option-sizing--container").hide(300);
        $("#gender-optional").removeAttr("name", "properties[Gender]");
        $("#custom-options-enabled").removeAttr("name", "properties[custom]");

        // Men
        if($("#slip-on__men")) {
            $("#slip-on__men").removeAttr("name", "properties[Size]");
        }
        if($("#high-tops__men")) {
            $("#high-tops__men").removeAttr("name", "properties[Size]").hide();
        }
        if($("#boots__men")) {
            $("#boots__men").removeAttr("name", "properties[Size]").hide();
        }

        // Women
        if($("#slip-on__women")) {
            $("#slip-on__women").removeAttr("name", "properties[Size]");
        }
        if($("#high-tops__women")) {
            $("#high-tops__women").removeAttr("name", "properties[Size]").hide();
        }
        if($("#boots__women")) {
            $("#boots__women").removeAttr("name", "properties[Size]").hide();
        }
        
    }
});

$("#gender-optional").on("change", (event) => {
    event.preventDefault();
    console.log($("#gender-optional").val())

    if($("#gender-optional").val() == 'Men') {
        if($("#slip-on__men")) {
            $("#slip-on__men").show().attr("name", "properties[Size]");
            $("#slip-on__women").hide().removeAttr("name", "properties[Size]");
        }

        if($("#high-tops__men")) {
            $("#slip-on__men").show().attr("name", "properties[Size]");
            $("#slip-on__women").hide().removeAttr("name", "properties[Size]");
        }

        if($("#boots__men")) {
            $("#slip-on__men").show().attr("name", "properties[Size]");
            $("#slip-on__women").hide().removeAttr("name", "properties[Size]");
        }
    }

    if($("#gender-optional").val() == 'Women') {
        if($("#slip-on__women")) {
            $("#slip-on__women").show().attr("name", "properties[Size]");
            $("#slip-on__men").hide().removeAttr("name", "properties[Size]");
        }

        if($("#high-tops__women")) {
            $("#high-tops__women").show().attr("name", "properties[Size]");
            $("#high-tops__men").hide().removeAttr("name", "properties[Size]");
        }

        if($("#boots__women")) {
            $("#boots__women").show().attr("name", "properties[Size]");
            $("#boots__men").hide().removeAttr("name", "properties[Size]");
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.querySelector('.file-upload__input');
    const fileNameDisplay = document.querySelector('.file-upload__selected-file');
    
    if (fileInput && fileNameDisplay) {
      fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
          fileNameDisplay.textContent = this.files[0].name;
        } else {
          fileNameDisplay.textContent = '';
        }
      });
    }
});


$("#talk-open-chat").on("click", function(e) {
    console.log("clicked");
    $("#ShopifyChat").click();
});