import Swiper from './libs/swiper.js';

document.addEventListener('DOMContentLoaded', () => {

	/*GLOBAL VARS ======================================================================================================================*/

	const infraTabs = document.querySelectorAll('.infra__tab');
	const infraTabsParent = document.querySelector('.infra__tabs');
	const infraTabsContent = document.querySelectorAll('.infra__content');

	const planTabs = document.querySelectorAll('.plan__tab');
	const planTabsParent = document.querySelector('.plan__tabs');
	const planTabsContent = document.querySelectorAll('.plan__body_item');

	/*FUNCTIONS FOR TABS ===============================================================================================================*/

	function hideTabContent(tabsContent, tabs, activeClass) {
		tabsContent.forEach( i => {
			i.classList.add('hide');
			i.classList.remove('show', 'fade');
		});

		tabs.forEach(i => {
			i.classList.remove(activeClass);
		});
	}


	function showTabContent(i = 0, tabsContent, tabs, activeClass) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}



	/*INFRASTRUCTURE TABS ===============================================================================================================*/

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
			})
		}
	});


	/*PLANNING SLIDER TABS ==============================================================================================================*/

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


	/*Plannin section slider*/
	const planSlider = new Swiper('.plan__body_item', {
		slidesPerView: 1,
		spaceBetween: 10,
	});





	/*GALLERY SECTION SLIDER*/
	const gallerySlider = new Swiper('.gallery__body', {
		slidesPerView: 1,
		spaceBetween: 10,
		width: 703
	});




	/*MOVEMENT SECTION SLIDER*/
	const moveSlider = new Swiper('.move__body_item', {
		slidesPerView: 3,
		spaceBetween: 32
	});



	/*MOVEMENT SECTION TABS*/

	const moveTabs = document.querySelectorAll('.move__tab');
	const moveTabsParent = document.querySelector('.move__tabs');
	const moveTabsContent = document.querySelectorAll('.move__body_item');

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


































	/*Infrastructure Tabs*/


	/*Yandex Map*/
	// ymaps.ready(function () {
 //        let myMap = new ymaps.Map('map', {
 //                center: [51.118834, 71.483385],
 //                zoom: 17
 //            }, {
 //                searchControlProvider: 'yandex#search'
 //            }),

 //            // Создаём макет содержимого.
 //            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
 //                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
 //            ),

 //            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
 //                hintContent: 'Собственный значок метки',
 //                balloonContent: 'Это красивая метка'
 //            }, {
 //                // Опции.
 //                // Необходимо указать данный тип макета.
 //                iconLayout: 'default#image',
 //                // Своё изображение иконки метки.
 //                iconImageHref: 'https://erzhanpvl.github.io/img/mapicon.png',
 //                // Размеры метки.
 //                iconImageSize: [100, 96],
 //                // Смещение левого верхнего угла иконки относительно
 //                // её "ножки" (точки привязки).
 //                iconImageOffset: [-100, -38]
 //            })

 //        myMap.geoObjects
 //            .add(myPlacemark)
 //            .add(myPlacemarkWithContent);
 //    });
})












