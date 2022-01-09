const drop = () => {

  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highLight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7';
  }

  function unHighLight(item) {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }

  }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highLight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unHighLight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      input.files[0].name.split('.')[0].length > 6 ? dots = '...' : dots = '.';
      const name = input.files[0].name.split('.')[0].substring(0, 6) + dots + input.files[0].name.split('.')[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;