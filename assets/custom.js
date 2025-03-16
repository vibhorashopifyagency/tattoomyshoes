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


document.addEventListener('DOMContentLoaded', function() {
    const customChatButton = document.getElementById('talk-open-chat');
    
    if (customChatButton) {
      customChatButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Try to find and click the Shopify Chat button
        try {
          // Method 1: Try to find the chat button using Shopify's common selectors
          const shopifyChatButton = document.querySelector('[data-shopify-chat-button]') || 
                                    document.querySelector('.shopify-chat-button') || 
                                    document.querySelector('[aria-label="Chat"]');
          
          if (shopifyChatButton) {
            shopifyChatButton.click();
            return;
          }
          
          // Method 2: If direct click doesn't work, try to trigger via Shopify Chat API
          if (window.ShopifyChat) {
            window.ShopifyChat.open();
            return;
          }
          
          // Method 3: Last resort, dispatch a custom event that Shopify might listen for
          document.dispatchEvent(new CustomEvent('shopify:chat:open'));
          
          console.log('Attempted to open Shopify chat');
        } catch (error) {
          console.error('Error while trying to open Shopify chat:', error);
        }
      });
    } else {
      console.warn('Custom chat button with ID "talk-open-chat" not found');
    }
  });