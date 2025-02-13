const messages = [
  "Bè chắc hongg?",
  "Chắc chắn luôn hả??",
  "Thật sự hongg muốn hả??",
  "Pờ liiii...",
  "Suy nghĩ kĩ rùi hả?",
  "M mà hong đồng ý là t siêu buồn...",
  "Rất buồnn",
  "Rất rất rất buồn",
  "Thui được rùi tui koo hỏi nữa",
  "Đùa thuii đồng ý nháa",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
