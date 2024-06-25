import React, { useEffect, useRef } from 'react';

const CounterUp = ({ endValue, time = 400, delay = 10 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        let nums = [];
        const divisions = time / delay;
        let num = endValue;
        const isComma = /[0-9]+,[0-9]+/.test(num.toString());
        num = num.toString().replace(/,/g, '');
        const isInt = /^[0-9]+$/.test(num);
        const isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        const decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

        for (let i = divisions; i >= 1; i--) {
            let newNum = parseInt(num / divisions * i);
            if (isFloat) {
                newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
            }
            if (isComma) {
                while (/(\d+)(\d{3})/.test(newNum.toString())) {
                    newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1,$2');
                }
            }
            nums.unshift(newNum);
        }

        const updateNumber = () => {
            element.innerHTML = nums.shift();
            if (nums.length) {
                setTimeout(updateNumber, delay);
            }
        };

        updateNumber();
    }, [endValue, time, delay]);

    return (
        <div ref={elementRef}>0</div>
    );
};

export default CounterUp