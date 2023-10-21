const wrapperEl = document.querySelector('.wrapper');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        wrapperEl.classList.add('wrapper-scrolled')
    } else if(window.scrollY <= 50) {
        wrapperEl.classList.remove('wrapper-scrolled');
    }
})

function switchChat(chatNumber) {
    // Hide all chat boxes
    document.querySelectorAll('.chat-box').forEach(function(box) {
      box.style.display = 'none';
    });
  
    // Show the selected chat box
    document.getElementById('chatBox' + chatNumber).style.display = 'block';
  
    // Remove the active class from all chat list items
    document.querySelectorAll('.chat-list-item').forEach(function(item) {
      item.classList.remove('active');
    });
  
    // Add the active class to the selected chat list item
    document.querySelector('.chat-list-item:nth-child(' + chatNumber + ')').classList.add('active');
  }

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });