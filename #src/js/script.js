import Swiper from './libs/swiper.js';
import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {

	/*MODAL ================================================================*/
	MicroModal.init();

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

	if(infraTabs) {
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

	if(planTabs) {
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

	if(moveTabs) {
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
	ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: [51.118834, 71.483385],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                // hintContent: 'Собственный значок метки',
                // balloonContent: 'Это красивая метка'
                // balloonContentHeader: `
                // 	<div class="map__balloon">
                // 	<h3 class="map__title">Отдел продаж:</h3>
                // `,
                // balloonContentBody: `
                // 	<div class="map__content_body">
                // 		<div class="map__content_body_adr">г. Нур-Султан, пересечение ул. С. Нурмағамбетова и Ж.Нажімеденова</div>
                // 		<a class="map__content_body_tel" href="+77172677373">+7 7172 67-73-73</a>
                // 	</div>
                // 	</div>
                // `
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://erzhanpvl.github.io/img/mapicon.png',
                // Размеры метки.
                iconImageSize: [100, 96],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-100, -38]
            })

        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();
            
    });




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
    let mobInfraSlider;

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
    if(window.innerWidth >= 1200 && mobInfraSlider) {
    	mobInfraSlider.destroy();
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
	    if(window.innerWidth >= 1200 && mobInfraSlider) {
	    	mobInfraSlider.destroy();
	    	document.querySelector('.infra__content_slider_wr').removeAttribute('style');
	    	document.querySelectorAll('.infra__content_item').forEach(i => {
	    		i.removeAttribute('style');	
	    	});
	    }
    })



    /*Burger*/

    const burgerMenu = document.querySelector('.burger');
    const burgerBtn = document.querySelector('.mob__header_burger');

	if(burgerMenu) {
		burgerBtn.addEventListener('click', () => {
			burgerMenu.classList.toggle('burger-open');
		});
	}




	/*tabSlider*/
    let tabSliderSw;

    if(window.innerWidth < 1200) {
	    	tabSliderSw = new Swiper('.tabs-slider', {
	    		slidesPerView: 1,
	    	});

	    }

	    if(window.innerWidth >= 1200 && tabSliderSw) {

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

	    if(window.innerWidth >= 1200 && tabSliderSw) {

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
    



    /*Benefits slider*/
    let benSldier;


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

	    if (window.innerWidth >= 1200 && benSldier) {
	    	benSldier.destroy(true, true);
	    	document.querySelector('.ben__content_wr').removeAttribute('style');
	    	document.querySelector('.ben__content_wr').style.height = 'auto';
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

	    if (window.innerWidth >= 1200 && benSldier) {
	    	benSldier.destroy(true, true);
	    	document.querySelector('.ben__content_wr').removeAttribute('style');
	    	document.querySelector('.ben__content_wr').style.height = 'auto';
	    	document.querySelectorAll('.ben__item').forEach(i => {
	    		i.removeAttribute('style');
	    	})
	    }
    
})












