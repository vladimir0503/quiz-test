export const steps = [
    {
        title: 'Для кого вы ищете учебное заведение?',
        html: `
        <form class="radio-block">
            <div id="radio" class="radio-block--item">
                <label for="yourself">Себе</label>
                <input value="yourself" name="whom" id="yourself" type="radio"/>
            </div>
            <div id="radio" class="radio-block--item">
                <label for="wife/husband">Супругу/супруге</label>
                <input value="wife/husband" name="whom" id="wife/husband" type="radio"/>
            </div>
            <div id="radio" class="radio-block--item">
                <label for="relative">Родственнику</label>
                <input value="relative" name="whom" id="relative" type="radio"/>
            </div>
            <div id="radio" class="radio-block--item">
                <label for="colleague">Коллеге</label>
                <input value="colleague" name="whom" id="colleague" type="radio"/>
            </div>
            <div id="radio" class="radio-block--item">
                <label for="child">Ребенку</label>
                <input value="child" name="whom" id="child" type="radio"/>
            </div>
            <div id="radio" class="radio-block--item">
                <label for="other">Другое</label>
                <input value="other" name="whom" id="other" type="radio"/>
            </div>
            <div class="quiz__step-wrapper--btn-block first-step">
                <button name="forward">
                    Далее
                    <img src="./img/right.svg" alt="right" />
                </button>
            </div>
        </form>
    `
    },
    {
        title: 'В каком городе планируете поступать?',
        html: `
            <form class="select-block">
                <div>
                    <label for="city-select">
                        Город
                        <img src="./img/select-arrow.svg" alt="select-arrow" />
                    </label>
                    <select id="city-select" name="city">
                        <option value="moscow">Москва</option>
                        <option value="saint-petersburg">Санкт-Петербург</option>
                        <option value="novosibirsk">Новосибирск</option>
                        <option value="ekaterinburg">Екатеринбург</option>
                        <option value="nizhny-novgorod">Нижний Новгород</option>
                        <option value="kazan">Казань</option>
                        <option value="chelyabinsk">Челябинск</option>
                        <option value="omsk">Омск</option>
                        <option value="samara">Самара</option>
                        <option value="rostov-on-don">Ростов-на-Дону</option>
                    </select>
                </div>
                <div class="quiz__step-wrapper--btn-block select-btns">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Какое образование уже есть?',
        html: `
            <form class="radio-block">
                <div id="radio" class="radio-block--item">
                    <label for="9 classes">9 классов</label>
                    <input value="9 classes" name="education" id="9 classes" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="College/technical school">Колледж/техникум</label>
                    <input value="College/technical school" name="education" id="College/technical school" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="11 classes">11 классов</label>
                    <input value="11 classes" name="education" id="11 classes" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="11 classes">11 классов</label>
                    <input value="11 classes" name="education" id="11 classes" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="school">Училище</label>
                    <input value="school" name="education" id="school" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="incomplete higher education">Неоконченное высшее</label>
                    <input value="incomplete higher education" name="education" id="incomplete higher education" type="radio"/>
                </div>
                <div class="quiz__step-wrapper--btn-block">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Куда планируете поступать?',
        html: `
            <form class="radio-block">
                <div id="radio" class="radio-block--item large">
                    <label for="university">Вуз</label>
                    <input value="university" name="where" id="university" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item large">
                    <label for="College/technical school">Колледж/техникум</label>
                    <input value="College/technical school" name="where" id="College/technical school" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item large">
                    <label for="school">Училище</label>
                    <input value="school" name="where" id="school" type="radio"/>
                </div>
                <div class="quiz__step-wrapper--btn-block">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Какую форму обучения предпочитаете?',
        html: `
            <form class="radio-block">
                <div id="radio" class="radio-block--item large">
                    <label for="full-time">Очная</label>
                    <input value="full-time" name="form" id="full-time" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item large">
                    <label for="extramural">Заочная</label>
                    <input value="extramural" name="form" id="extramural" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item large">
                    <label for="remote">Дистанционная</label>
                    <input value="remote" name="form" id="remote" type="radio"/>
                </div>
                <div class="quiz__step-wrapper--btn-block">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Рассматриваете платное обучение?',
        html: `
            <form class="radio-block">
                <div id="radio" class="radio-block--item large">
                    <label for="budget">Нет, только бюджет</label>
                    <input value="budget" name="payment" id="budget" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item large">
                    <label for="pay">Да, планирую учиться платно</label>
                    <input value="pay" name="payment" id="pay" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item large">
                    <label for="both options">Возможны оба варианта</label>
                    <input value="both options" name="payment" id="both options" type="radio"/>
                </div>
                <div class="quiz__step-wrapper--btn-block">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Какая специальность интересует?',
        html: `
            <form class="select-block">
                <div>
                    <label for="speciality-select">
                        Специальность
                        <img src="./img/select-arrow.svg" alt="select-arrow" />
                    </label>
                    <select id="speciality-select" name="speciality">
                        <option value="economic">Экономика</option>
                        <option value="philosophy">Философия</option>
                        <option value="sociology">Социология</option>
                        <option value="jurisprudence">Юриспруденция</option>
                        <option value="mathematics">Математика</option>
                    </select>
                </div>
                <div class="quiz__step-wrapper--btn-block select-btns">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Как скоро планируете поступать?',
        html: `
            <form class="radio-block">
                <div id="radio" class="radio-block--item">
                    <label for="faster">Как можно быстрее</label>
                    <input value="faster" name="when" id="faster" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="month">Месяц</label>
                    <input value="month" name="when" id="month" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="quarter">Квартал</label>
                    <input value="quarter" name="when" id="quarter" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="half-year">Полгода</label>
                    <input value="half-year" name="when" id="half-year" type="radio"/>
                </div>
                <div id="radio" class="radio-block--item">
                    <label for="year">Год</label>
                    <input value="year" name="when" id="year" type="radio"/>
                </div>
                <div class="quiz__step-wrapper--btn-block">
                    <button name="back">
                        <img src="./img/left.svg" alt="left" />
                        Назад
                    </button>
                    <button name="forward">
                        Далее
                        <img src="./img/right.svg" alt="right" />
                    </button>
                </div>
            </form>
        `
    },
    {
        title: 'Ваша подборка готова! 🥳 Куда нам отправить её?',
        html: `
            <form class="submit-block">
                <input type="text" name="name" required placeholder="Как вас зовут?"/>
                <input type="tel" name="tel" required placeholder="Номер телефона"/>
                <input type="email" name="email" required placeholder="E-mail"/>
                <input name="final" type="submit" value="Получить подборку"/>
                <p>Нажимая на кнопку, вы даете согласие на обработку своих <span>Персональных данных</span></p>
            </form>
        `
    }
];

export const success = `
    <div class="success-block">
        <img src="./img/success.png" alt="success" />
        <h2>Отлично, спасибо!</h2>
        <p>Мы отправили подборку вам на почту.
            Если подборка не приходит — проверьте спам, возможно, она попала туда.</p>
    </div>
`;