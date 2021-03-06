import Swiper from './libs/swiper.js';
import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {

	/*MODAL ================================================================*/
	MicroModal.init();
	/*SECTIONS*/
	const main = document.querySelector('#main');
	const about = document.querySelector('#about');
	const ben = document.querySelector('#ben');
	const infra = document.querySelector('#infra');
	const cond = document.querySelector('#cond');
	const video = document.querySelector('#video');
	const plan = document.querySelector('#plan');
	const gallery = document.querySelector('#gallery');
	const move = document.querySelector('#move');
	const news = document.querySelector('#news');
	const feed = document.querySelector('#feed');

	/*GLOBAL VARS ======================================================================================================================*/

	const infraTabs = document.querySelectorAll('.infra__tab');
	const infraTabsParent = document.querySelector('.infra__tabs');
	const infraTabsContent = document.querySelectorAll('.infra__content');

	const planTabs = document.querySelectorAll('.plan__tab');
	const planTabsParent = document.querySelector('.plan__tabs');
	const planTabsContent = document.querySelectorAll('.plan__body_item');

	/*FUNCTIONS FOR TABS ===============================================================================================================*/

	function hideTabContent(tabsContent, tabs, activeClass) {
		if(tabs) {
			tabsContent.forEach( i => {
				i.classList.add('hide');
				i.classList.remove('show', 'fade');
			});

			tabs.forEach(i => {
				i.classList.remove(activeClass);
			});
		};
	}


	function showTabContent(i = 0, tabsContent, tabs, activeClass) {
		if(tabs) {
			tabsContent[i].classList.add('show', 'fade');
			tabsContent[i].classList.remove('hide');
			tabs[i].classList.add(activeClass);
		};
	}



	/*INFRASTRUCTURE TABS ===============================================================================================================*/

	if(infra) {
		hideTabContent(infraTabsContent, infraTabs, 'tab-active');
		showTabContent(0, infraTabsContent, infraTabs, 'tab-active');



		infraTabsParent.addEventListener('click', (e) => {
			const target = e.target;

			if (target && target.classList.contains('infra__tab')) {
				infraTabs.forEach((item, i) => {
					if (target === item) {
						hideTabContent(infraTabsContent, infraTabs, 'tab-active');
						showTabContent(i, infraTabsContent, infraTabs, 'tab-active');
					}
				});
			};
		});
	}
	

	


	/*PLANNING SLIDER TABS ==============================================================================================================*/

	if(plan) {
		hideTabContent(planTabsContent, planTabs, 'plan-active');
		showTabContent(0, planTabsContent, planTabs, 'plan-active');

		planTabsParent.addEventListener('click', (e) => {
			const target = e.target;

			if(target && target.classList.contains('plan__tab')) {
				planTabs.forEach((item, i) => {
					if(target === item) {
						hideTabContent(planTabsContent, planTabs, 'plan-active');
						showTabContent(i, planTabsContent, planTabs, 'plan-active');
					}
				})
			}
		})
	}

	


	/*Plannin section slider*/
	const planSlider = new Swiper('.plan__body_item', {
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.plan-next',
    		prevEl: '.plan-prev',

		}
	});





	/*GALLERY SECTION SLIDER*/
	const gallerySlider = new Swiper('.gallery__body', {
		slidesPerView: 1,
		spaceBetween: 10,
		
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			prevEl: '.gallery-prev',
			nextEl: '.gallery-next'
		}
	});




	/*MOVEMENT SECTION SLIDER*/
	const moveSlider = new Swiper('.move__body_item', {
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			prevEl: '.move-prev',
			nextEl: '.move-next'
		},
		slidesPerView: 1,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 32,
				
			}
		}
	});



	/*MOVEMENT SECTION TABS*/

	const moveTabs = document.querySelectorAll('.move__tab');
	const moveTabsParent = document.querySelector('.move__tabs');
	const moveTabsContent = document.querySelectorAll('.move__body_item');

	if(move) {
		hideTabContent(moveTabsContent, moveTabs, 'move-active');
		showTabContent(0, moveTabsContent, moveTabs, 'move-active');


		moveTabsParent.addEventListener('click', (e) => {
			let target = e.target;

			if(target && target.classList.contains('move__tab')) {
				moveTabs.forEach((item, i) => {
					if (target === item) {
						hideTabContent(moveTabsContent, moveTabs, 'move-active');
						showTabContent(i, moveTabsContent, moveTabs, 'move-active');
					}
				})
			}
		});
	}



	/*Yandex Map*/
	const mapTar = document.querySelector('#map');
	if(mapTar) {
		ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: [51.118834, 71.483385],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // ?????????????? ?????????? ??????????????????????.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                // hintContent: '?????????????????????? ???????????? ??????????',
                // balloonContent: '?????? ???????????????? ??????????'
                // balloonContentHeader: `
                // 	<div class="map__balloon">
                // 	<h3 class="map__title">?????????? ????????????:</h3>
                // `,
                // balloonContentBody: `
                // 	<div class="map__content_body">
                // 		<div class="map__content_body_adr">??. ??????-????????????, ?????????????????????? ????. ??. ???????????????????????????? ?? ??.????????????????????????</div>
                // 		<a class="map__content_body_tel" href="+77172677373">+7 7172 67-73-73</a>
                // 	</div>
                // 	</div>
                // `
            }, {
                // ??????????.
                // ???????????????????? ?????????????? ???????????? ?????? ????????????.
                iconLayout: 'default#image',
                // ???????? ?????????????????????? ???????????? ??????????.
                iconImageHref: 'https://erzhanpvl.github.io/img/mapicon.png',
                // ?????????????? ??????????.
                iconImageSize: [100, 96],
                // ???????????????? ???????????? ???????????????? ???????? ???????????? ????????????????????????
                // ???? "??????????" (?????????? ????????????????).
                iconImageOffset: [-100, -38]
            })

        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();
            
    });
	}
	




    /*Navigation Aside*/
    const asideNavItems = document.querySelectorAll('.aside__nav_item');

    if(asideNavItems) {
    	asideNavItems.forEach(i => {
	    	i.addEventListener('click', (e) => {
	    		let tar = e.target;

	    		
	    		asideNavItems.forEach(item => {
	    			item.classList.remove('nav-active');
	    		});
	    		if(tar && tar.classList.contains('aside__nav_item')) {
	    			tar.classList.add('nav-active');
	    		}
	    	});
	    });
    }















    /*MOBILE ========================================*/

    /*Mobile prev image*/
    const prevImg = document.querySelector('.prev__img');

    if(prevImg) {
    	window.addEventListener('resize', () => {
	    	if(window.innerWidth < 1200) {
	    		prevImg.setAttribute('src', './img/mob-prev-bg.png');
	    	} 
	    	if(window.innerWidth > 1200) {
	    		prevImg.setAttribute('src', './img/prev@1x.png');
	    	}
	    });

	    if(window.innerWidth < 1200) {
	    	prevImg.setAttribute('src', './img/mob-prev-bg.png');
	    } 
	    if(window.innerWidth > 1200) {
    		prevImg.setAttribute('src', './img/prev@1x.png');
    	}
    }


    /*Mobile slider Infrastructure*/

    const mainPage = document.querySelector('.main-page');

    let mobInfraSlider;


    if(infra) {
    	if(window.innerWidth < 1200) {
	    	mobInfraSlider = new Swiper('.infra__content_slider', {
	    		slidesPerView: 1,
	    		spaceBetween: 10,
	    		navigation: {
	    			prevEl: '.infra-prev',
	    			nextEl: '.infra-next',

	    		}
	    	});
	    }
	    if(window.innerWidth >= 1200) {
	    	mobInfraSlider = undefined;
	    	document.querySelector('.infra__content_slider_wr').removeAttribute('style');
	    	document.querySelectorAll('.infra__content_item').forEach(i => {
	    		i.removeAttribute('style');	
	    	});

	    }


	    window.addEventListener('resize', () => {
	    	if(window.innerWidth < 1200) {
		    	mobInfraSlider = new Swiper('.infra__content_slider', {
		    		slidesPerView: 1,
		    		spaceBetween: 10,
		    		navigation: {
		    			prevEl: '.infra-prev',
		    			nextEl: '.infra-next',

		    		}
		    	});
		    }
		    if(window.innerWidth >= 1200) {
		    	mobInfraSlider = undefined;
		    	document.querySelector('.infra__content_slider_wr').removeAttribute('style');
		    	document.querySelectorAll('.infra__content_item').forEach(i => {
		    		i.removeAttribute('style');	
		    	});
		    }
	    })
    }
	



    /*Burger*/

    const burgerMenu = document.querySelector('.burger');
    const burgerBtn = document.querySelector('.mob__header_burger');

	if(burgerMenu) {
		burgerBtn.addEventListener('click', () => {
			burgerMenu.classList.toggle('burger-open');
			burgerBtn.classList.toggle('burger-open');
		});
	}




	/*tabSlider*/
    let tabSliderSw;

    if(mainPage) {
    	if(window.innerWidth < 1200) {
	    	tabSliderSw = new Swiper('.tabs-slider', {
	    		slidesPerView: 1,
	    	});

	    }

	    if(window.innerWidth >= 1200) {
	    	tabSliderSw = undefined;
	    	document.querySelectorAll('.tabs-slider-wrapper').forEach(i => {
	    		i.removeAttribute('style');
	    	});
	    	document.querySelectorAll('.tabs-slider').forEach(i => {
	    		i.removeAttribute('style');
	    	});
	    	document.querySelectorAll('.tabs-slide').forEach(i => {
	    		i.removeAttribute('style');
	    	})
	    }

    window.addEventListener('resize', () => {
    	if(window.innerWidth < 1200) {
	    	tabSliderSw = new Swiper('.tabs-slider', {
	    		slidesPerView: 1,
	    	});

	    }

	    if(window.innerWidth >= 1200) {
	    	tabSliderSw = undefined;

	    	document.querySelectorAll('.tabs-slider-wrapper').forEach(i => {
	    		i.removeAttribute('style');
	    	});
	    	document.querySelectorAll('.tabs-slider').forEach(i => {
	    		i.removeAttribute('style');
	    	});
	    	document.querySelectorAll('.tabs-slide').forEach(i => {
	    		i.removeAttribute('style');
	    	})
	    }
    });
    }
    



    /*Benefits slider*/
    let benSldier;


    if(ben) {
    	window.addEventListener('resize', () => {
    	if(window.innerWidth < 1200) {
    		benSldier = new Swiper('.ben__content', {
	    		slidesPerView: 1,
	    		spaceBetween: 10,
	    		autoHeight: true,
	    		navigation: {
	    			nextEl: '.ben-next',
	    			prevEl: '.ben-prev'
	    		},
	    	});
	    }

	    if (window.innerWidth >= 1200) {
	    	benSldier = undefined;
	    	document.querySelector('.ben__content_wr').removeAttribute('style');
	    	document.querySelectorAll('.ben__item').forEach(i => {
	    		i.removeAttribute('style');
	    	})
	    }
    })

    if(window.innerWidth < 1200) {
    		benSldier = new Swiper('.ben__content', {
	    		slidesPerView: 1,
	    		spaceBetween: 10,
	    		autoHeight: true,
	    		navigation: {
	    			nextEl: '.ben-next',
	    			prevEl: '.ben-prev'
	    		},
	    	});
	    }

	    if (window.innerWidth >= 1200) {
	    	benSldier = undefined;
	    	document.querySelector('.ben__content_wr').removeAttribute('style');
	    	document.querySelectorAll('.ben__item').forEach(i => {
	    		i.removeAttribute('style');
	    	});

	    }
    }

    
})












