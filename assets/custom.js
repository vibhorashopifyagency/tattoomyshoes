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

    // Custom File Upload's show image name on select
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


    // Open ShopifyChat on Talk to us button click


    document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener('DOMContentLoaded', function() {
            const customChatButton = document.getElementById('talk-open-chat');
            
            if (customChatButton) {
              customChatButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Target the specific Shopify Chat element from your HTML
                const shopifyChat = document.querySelector('inbox-online-store-chat#ShopifyChat');
                
                if (shopifyChat) {
                  // First set the is-open attribute to true to open the chat
                  shopifyChat.setAttribute('is-open', 'true');
                  
                  // Get the current product info (if on a product page)
                  let customMessage = 'I have a question about this product';
                  try {
                    const productTitle = document.querySelector('.product__title')?.textContent.trim();
                    if (productTitle) {
                      customMessage = `I have a question about ${productTitle}`;
                    }
                  } catch (error) {
                    console.log('Not on a product page or product title not found');
                  }
                  
                  // Wait for the chat to fully open before attempting to modify the input field
                  setTimeout(() => {
                    // Try various selectors that might match the chat input field
                    const inputSelectors = [
                      'input[placeholder*="message" i]',
                      'textarea[placeholder*="message" i]',
                      '.chat-input-field',
                      '[aria-label="Message"]',
                      '.shopify-chat-input',
                      'input[type="text"]',
                      'textarea'
                    ];
                    
                    // Try each selector
                    for (const selector of inputSelectors) {
                      // Check both in main document and within any iframes
                      const inputField = document.querySelector(selector);
                      
                      if (inputField) {
                        // Set the value of the input field
                        inputField.value = customMessage;
                        
                        // Trigger input event to make sure the chat recognizes the value change
                        inputField.dispatchEvent(new Event('input', { bubbles: true }));
                        
                        // Focus the input field
                        inputField.focus();
                        console.log('Successfully set chat input value');
                        break;
                      }
                    }
                    
                    // If we couldn't find the input field in the main document, try to find it in iframes
                    if (!document.querySelector(inputSelectors.join(','))) {
                      const chatIframes = document.querySelectorAll('iframe');
                      chatIframes.forEach(iframe => {
                        try {
                          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                          for (const selector of inputSelectors) {
                            const iframeInput = iframeDoc.querySelector(selector);
                            if (iframeInput) {
                              iframeInput.value = customMessage;
                              iframeInput.dispatchEvent(new Event('input', { bubbles: true }));
                              iframeInput.focus();
                              console.log('Set chat input value in iframe');
                              return;
                            }
                          }
                        } catch (err) {
                          // Cross-origin iframe access might be blocked
                          console.log('Could not access iframe content', err);
                        }
                      });
                    }
                  }, 1500); // Wait 1.5 seconds for the chat to fully open
                }
              });
            } else {
              console.warn('Custom chat button with ID "talk-open-chat" not found');
            }
        });



    // const customChatButton = document.getElementById('talk-open-chat');
    
    // if (customChatButton) {
    //   customChatButton.addEventListener('click', function(e) {
    //     e.preventDefault();
        
    //     try {
    //       // Target the specific Shopify Chat element from your HTML
    //       const shopifyChat = document.querySelector('inbox-online-store-chat#ShopifyChat');
          
    //       if (shopifyChat) {
    //         // Method 1: Try to set the is-open attribute to true
    //         shopifyChat.setAttribute('is-open', 'true');
            
    //         // Method 2: Look for the actual button within the component and click it
    //         const chatButton = shopifyChat.shadowRoot ? 
    //                           shopifyChat.shadowRoot.querySelector('button') : 
    //                           shopifyChat.querySelector('button');
            
    //         if (chatButton) {
    //           chatButton.click();
    //           console.log('Found and clicked the chat button');
    //         } else {
    //           // Method 3: Dispatch a custom event that the component might listen for
    //           shopifyChat.dispatchEvent(new CustomEvent('toggle-chat', { bubbles: true }));
    //           console.log('Dispatched toggle-chat event');
    //         }
    //       } else {
    //         console.warn('ShopifyChat element not found');
    //       }
    //     } catch (error) {
    //       console.error('Error while trying to open Shopify chat:', error);
    //     }
    //   });
    // } else {
    //   console.warn('Custom chat button with ID "talk-open-chat" not found');
    // }
});
