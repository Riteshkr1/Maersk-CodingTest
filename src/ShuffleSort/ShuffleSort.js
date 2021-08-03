class ShuffleSort {
    suffleSortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    render() {
        const length = this.suffleSortArray.length;
        let renderHtml = '';
        for (let i = 0; i < length; i++) {
            renderHtml = renderHtml + `<div class=box${i+1}> ${this.suffleSortArray[i]} </div>`;
        }


        this.rootElement.innerHTML = renderHtml;
        document.getElementById("suffleBtn").addEventListener("click", this.shuffleHandler);
        document.getElementById("sortBtn").addEventListener("click", this.sortHandler);
    }

    shuffleHandler = () => {
        let length = this.suffleSortArray.length;
        let randomGeneratedIndex = 0;
        let temp = 0;
        while (length !== 0) {
            randomGeneratedIndex = Math.floor(Math.random() * length);
            length--;
            //swap
            temp = this.suffleSortArray[length];
            this.suffleSortArray[length] = this.suffleSortArray[randomGeneratedIndex];
            this.suffleSortArray[randomGeneratedIndex] = temp;
        }
        this.render();
    }

    sortHandler = () => {
        this.suffleSortArray.sort((a, b) => a - b);
        this.render();
    }

};

export default ShuffleSort;