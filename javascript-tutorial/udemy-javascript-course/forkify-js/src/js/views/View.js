import icons from "url:../../img/icons.svg";

export default class View {
    _data;

  render(data,render = true){
    if(!data || (Array.isArray(data) && data.length === 0))
    return this.renderError();
    this._data= data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);

    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElement = Array.from(this._)
    }
}