import Cookies from "js-cookie";

export function test() {
    Cookies.set('name', 'value');
    Cookies.remove('name');
}