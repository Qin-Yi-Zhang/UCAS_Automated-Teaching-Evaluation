// 1. 自动填写客观题（全部选择"非常符合/非常满意"）
var tds = document.getElementsByTagName('td');
for(var i = 0; i < tds.length; i += 5) {
    var inputs = tds[i].getElementsByTagName("input");
    if(inputs.length > 0) inputs[0].checked = true;
}

// 2. 填写主观题答案
var answers = [
    "我喜欢课程的全部内容，最喜欢老师的授课方式方法",
    "我觉得目前各方面都非常好，没有需要改进和提高的地方",
    "我平均每周在这门课程上花费10小时",
    "在参与这门课之前，我对这个学科领域兴趣非常浓厚",
    "我对该课程的课堂参与度非常高，全部出勤，回答问题积极"
];

var textareas = document.getElementsByTagName("textarea");
for(var i = 0; i < textareas.length && i < answers.length; i++) {
    textareas[i].value = answers[i];
}

// 3. 填写第6题（单选题）- 选择"A.教室大小合适"
// 根据提供的HTML，使用精确的name属性定位
document.querySelector('input[name="radio_1461"][id="1462"]').checked = true;

// 4. 填写第7题（多选题）- 全选所有选项
// 根据提供的HTML结构，全选所有checkbox
var checkboxes = document.querySelectorAll('input[type="checkbox"][name^="item_"]');
checkboxes.forEach(checkbox => {
    checkbox.checked = true;
});

// 5. 填写验证码（如果需要）
var captchaInput = document.querySelector('input[type="text"][name="captcha"]');
if(captchaInput) captchaInput.value = "a5y4";

console.log("所有题目已自动填写完成！请检查后提交。");