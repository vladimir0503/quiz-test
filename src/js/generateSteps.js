const generateSteps = steps => {
    const stepWrapper = document.querySelector('.quiz__step-wrapper--form');
    const titleBlock = document.querySelector('.quiz__step-wrapper--title-block');

    steps.forEach(({ title, html }, i) => {
        titleBlock.insertAdjacentHTML('beforeend', `
            <div>
                <h3>${title}</h3>
                <p>Шаг ${i + 1}/${steps.length}</p>
            </div>
        `);

        stepWrapper.insertAdjacentHTML('beforeend', html);
    });

};

export default generateSteps;