navHandler=function(){var e=document.querySelector(".fixed-nav");T.utils.addClass(e,"invisible")},onscroll=function(){var e=document.querySelector(".fixed-nav"),l=document.documentElement.scrollTop||document.body.scrollTop,o=30;l>o?(console.log("yup"),T.utils.addClass(e,"visible")):(console.log("nope"),T.utils.removeClass(e,"visible"))},navHandler();