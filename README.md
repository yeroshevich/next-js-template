Запуск проекта:
`docker-compose up`

Project Structure

[**Src**] \
 - [**Components**] \
 - - [**Layouts**] \
 Этот парень отвечает за шаблонные расположения элементов в нашем интерфейсе.
Самый популярный пример — компонент лэйаута страницы, который содержит в себе header, footer и
через children prop принимает в себя верстку, которую необходимо отобразить.
Layouts также могут принимать в себя компоненты через слоты, в виде props, и располагать их,
как нам необходимо. \
 - - [**Wrappers (HOCs)**] \
 Вспомогательные компоненты, которые используются для расширения или изменения
функциональности других элементов.
Пример — wrapper, который добавляет своим детям анимации при перемещении. \
 - - [**Widgets**] \
 Автономный, самостоятельный компонент, заключающий в
себе какую-то законченную часть функциональности. Содержит в себе всю бизнес-логику, которая ему необходима. Примеры: header,
форма авторизации, список товаров, баннер. \
 - - [**Dummies**] \
 Комплексный компонент отображения. Необходимые ему данные принимает через props.
Не содержит в себе бизнес-логики, только логику отображения,
например переключение видимости блоков в рамках компонента.
Самый популярный пример — карточка товара.
Мы передаем через props все характеристики товара, а также callback для кнопки
«добавить в корзину». Тем самым получаем переиспользуемый компонент, к которому
мы можем привязать любую необходимую бизнес-логику, которая может быть разной для
одного и того же отображения. \
 - - [**UI**] \
 Базовые компоненты, из которых строится интерфейс: кнопки, инпуты,
заголовки, лоадеры, тултипы и т.д.).
Может содержать в себе логику отображения, иметь локальный стейт. \

**_Правила импортов:_**
Наши компоненты делятся на 2 типа: имеющие иерархию и нейтральные.

`~~Нейтральные:~~`

- **Layouts**

- **Wrappers**

Нет ограничений на импорты.

`~~Иерархические (с верхнего слоя к нижнему)~~`

- **Widgets**

- **Dummies**

- **UI**

Здесь каждый компонент может быть импортирован только в любой вышестоящий. Например UI не может содержать в себе Widget. При этом Widget может как содержать в себе любые компоненты нижнего уровня, так и не содержать их вообще, а иметь только свою собственную верстку с логикой. Также допускаются импорты в рамках одного уровня.

\
\

**_Структура папки отдельного компонента:_**
Каждый компонент хранится в отдельной папке с названием в PascalCase (например MyComponent) и имеет следующую структуру:

**index.tsx**
Основной файл компонента, название должно дублировать название папки, в которой он лежит. Если компонент принимает props, то описание типа Props мы храним в этом файле, над объявлением компонента. Также может содержать описание других типов, если необходимо.

**index.ts**
Файл для сокращения пути import’а компонента. Также можно использовать для единой точки входа экспортируемых материалов из этого каталога.

**index.module.scss**
Файл стилей, относящихся к компоненту.

**types.ts (опционально)**
Здесь хранятся описания типов для нашего компонента. Иногда нам необходимо иметь описание типов, которые должны использоваться в другой части приложения. Их мы тоже храним здесь. Пример — тип, описывающий HTML-форму, у которой набор полей на фронтенде не совпадает с моделью бэкенда.

**constants.ts (опционально)**
Любые статические данные компонента.

**useMyComponent.ts (для компонентов с бизнес логикой)**
Всю бизнес-логику компонента мы выносим в хук рядом с компонентом. Это помогает разделять зоны ответственности в коде, и читать его становится легче. Также, если теоретически нам понадобится использовать эту бизнес-логику с другим отображением, мы сможем безболезненно имплементить такой функционал, ведь у нас он уже разделен.

**Components (опционально)**
Если мы хотим вынести часть кода в отдельный компонент, и при этом мы понимаем, что использоваться он будет только своим родителем, мы создаем его в этой директории. Структура этих компонентов такая же. Вложенность может быть любая.

-[**Models**]
Здесь мы храним описание типов, общих для нашего приложения. Это все описания серверных запросов и ответов, а также клиентские модели, которые не замкнуты на одном конкретном интерфейсе.
Мы создаем папку под каждую категорию моделей:

**Common**

**Auth**

**Users**

И т.д.

Каждая папка содержит:

- **_api.ts_** - Содержит в себе представления запросов и ответов сервера. В названиях моделей все запросы и ответы сервера помечаются суффиксами Request и Response соответственно.

- **_client.ts_** - Содержит общие модели, которые относятся только к фронтенду. Мы кладем их сюда, когда понимаем, что они потенциально могут быть использованы в нескольких частях приложения.

-[**Api**] \
Директория содержит функции для работы с сервером для всего приложения.
По аналогии с models разделение файлов идет по сущностям, с которыми работаем.

- **Users**\
  - **_api.ts_** - для обычных запросов
  - **_use.ts_** - для клиентских хуков (например через useQuery)

-[**Assets**]
Здесь храним все медиафайлы проекта (картинки, иконки, аудио, видео, гл. стили)

Содержит список каталогов, разбитых по категориям:

**_icons_**

**_images_**

**_audio_**

**_video_**

**_video_**

Внутри каталогов можно также организовывать
файлы по категориям, например /icons/arrows/regular-arrow.svg

-[**Constants**]
Все необходимые приложению константы.

-[**Hooks**]
Общие для приложения хуки.

-[**Stores**]
Сюда мы кладем хранилища наших стейт-менеджеров.

-[**Utils**]
Всевозможные вспомогательные функции, такие как debounce, compose, работа с localStorage и тд.
