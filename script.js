// SERVICE DESCRIPTIONS
const instagramRemovals =
"We expertise in Instagram account removals. Our service is 100% confidential and we offer the fastest turnaround time for Instagram removals. For more info feel free to DM.";

const instagramRecoveries =
"We offer instant recoveries via an authorized representative. Any account can be recovered, even if it’s disabled. We also offer manual recoveries. Make sure to DM for any info.";

const facebookRemovals =
"We offer the fastest Facebook removals. We can remove any account within a really quick timeframe. DM for any info.";

const tiktokRemovals =
"We expertise in TikTok removals and can remove any account within 24 hours. Follower count, verified or non-verified doesn’t matter. We can absolutely remove any account.";

const manyMore =
"There are some more services that we offer. For any information or questions, feel free to reach out via Telegram or WhatsApp.\n\nTelegram: https://t.me/YOUR_USERNAME\nWhatsApp: https://wa.me/919XXXXXXXXX";

// MODALS
function openService(title, desc){
  serviceTitle.innerText = title;
  serviceDesc.innerText = desc;
  serviceModal.style.display="block";
}
function closeService(){serviceModal.style.display="none"}

function openStartModal(){startModal.style.display="block"}
function closeStartModal(){startModal.style.display="none"}

// SCROLL REVEAL
const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("active")})
},{threshold:.15});
reveals.forEach(r=>observer.observe(r));

