const dropdownButtons = document.querySelectorAll(".dropbtn");
dropdownButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const dropdownContent = this.nextElementSibling;

    // 다른 드롭다운 숨김
    const allDropdownContents = document.querySelectorAll(".dropdown-content");
    console.log(allDropdownContents);
    allDropdownContents.forEach((content) => {
      if (content !== dropdownContent) {
        content.style.display = "none";
      }
    });

    // 클릭한 드롭다운 표시
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });
});

const dropdownItems = document.querySelectorAll(".dropdown-content a");
console.log(dropdownItems);
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const dropdown = this.parentElement.parentElement;
    const dropdownButton = dropdown.querySelector(".dropbtn");
    const selectedValue = this.textContent;
    dropdownButton.textContent = selectedValue;
    console.log(selectedValue);
  });
});
