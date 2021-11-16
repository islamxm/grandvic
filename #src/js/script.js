import Swiper from './libs/swiper.js';

document.addEventListener('DOMContentLoaded', () => {


	/*INFRASTRUCTURE TABS*/
	const infraTabs = document.querySelectorAll('.infra__tab');
	const infraTabsParent = document.querySelector('.infra__tabs');
	const infraTabsContent = document.querySelectorAll('.infra__content');


	function hideInfraContents() {
		infraTabsContent.forEach( i => {
			i.classList.add('hide');
			i.classList.remove('show', 'fade');
		});

		infraTabs.forEach(i => {
			i.classList.remove('tab-active');
		});
	}


	function showInfraContent(i = 0) {
		infraTabsContent[i].classList.add('show', 'fade');
		infraTabsContent[i].classList.remove('hide');
		infraTabs[i].classList.add('tab-active');
	}

	hideInfraContents();
	showInfraContent();


	infraTabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('infra__tab')) {
			infraTabs.forEach((item, i) => {
				if (target === item) {
					hideInfraContents();
					showInfraContent(i);
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












