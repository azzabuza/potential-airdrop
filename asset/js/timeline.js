function fetchAndDisplayTimeline() {
fetch('asset/data/timeline.json')
.then(response => response.json())
.then(data => {
const timelineBox = document.getElementById('timeline-box');
let timelineHTML = '';

data.forEach(item => {
timelineHTML += `
<div class="timeline-tile">
<h3>${item.title}</h3>
<p style="margin:0;font-weight:500;color:#2e8b57;">${item.developer}</p>
<p style="font-size:13px;">${item.platform}</p>
<a href="${item.link}" title="${item.title}">MAINKAN</a>
</div>
`;
});

timelineBox.innerHTML = timelineHTML;
})
.catch(error => console.error('Error fetching timeline data:', error));
}

fetchAndDisplayTimeline();
