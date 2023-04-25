import submitData from "./submitData";

const submitSteps = () => {

    const forms = document.querySelectorAll('form');
    const title = document.querySelector('.quiz__step-wrapper--title-block');
    const radioItem = document.querySelectorAll('#radio');

    let stepsData = {};

    const changeStep = (id = 0) => {
        [...title.children].forEach((item, i) => {
            if (i === id) {
                item.style.display = 'flex'
            } else {
                item.style.display = 'none';
            };
        });

        forms.forEach((form, i) => {
            if (i === id) {
                form.style.display = 'flex'
            } else {
                form.style.display = 'none';
            };
        });
    };

    changeStep();

    const toggleActiveRadio = () => {
        [...radioItem].forEach((item, i) => {
            if (item.children[1].checked) {
                item.classList.add('active-item');
            } else {
                item.classList.remove('active-item');
            };
        });
    };

    [...radioItem].forEach(item => {
        item.addEventListener('click', () => {
            item.children[1].checked = true;
            toggleActiveRadio();
        });
    });

    [...forms].forEach((form, i) => {

        form.addEventListener('submit', e => {
            e.preventDefault();

            const btnName = e.submitter.name;

            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            if (btnName === 'forward') {
                if (Object.values(data).length) {
                    stepsData = { ...stepsData, ...data };
                    changeStep(i + 1);
                };
            } else if (btnName === 'back') {
                changeStep(i - 1);
            } else {
                stepsData = { ...stepsData, ...data };
                submitData(stepsData);
            };
        });
    })
};

export default submitSteps;