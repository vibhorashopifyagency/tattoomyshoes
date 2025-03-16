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
          // Look for the Shopify Chat button using common selectors
          const shopifyChatButton = document.querySelector('[aria-label="Chat with us"]') || 
                                    document.querySelector('[data-chat-window-trigger]') ||
                                    document.querySelector('.shopify-chat-trigger') ||
                                    document.querySelector('.shopify-chat-launcher') ||
                                    document.querySelector('[data-shopify-chat="button"]');
          
          if (shopifyChatButton) {
            // Simulate a click on the actual chat button
            shopifyChatButton.click();
            console.log('Found and clicked Shopify chat button');
          } else {
            // Alternative method: Look for the iframe and try to communicate with it
            const chatIframe = document.querySelector('iframe[title*="chat" i]') || 
                             document.querySelector('iframe[src*="shopify-chat" i]');
            
            if (chatIframe) {
              // Try to make the iframe visible
              chatIframe.style.display = 'block';
              
              // Try to send a message to the iframe to open the chat
              try {
                chatIframe.contentWindow.postMessage({ action: 'open_chat' }, '*');
                console.log('Sent message to chat iframe');
              } catch (frameError) {
                console.warn('Could not communicate with chat iframe:', frameError);
              }
            } else {
              console.warn('Shopify chat button or iframe not found');
            }
          }
        } catch (error) {
          console.error('Error while trying to open Shopify chat:', error);
        }
      });
    } else {
      console.warn('Custom chat button with ID "talk-open-chat" not found');
    }
  });