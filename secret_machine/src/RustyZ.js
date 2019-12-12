/*
 * stdweb doesn't really have a good story/method for deploying es6 modules or
 * the only really good way to expose an object is on the window... which isn't great.
 *
 * Parcel integration/support for modules is ongoing but there's still a lot of work
 * that needs to be done to make it worthwhile.
 *
 * Additionally the setup of RustyZ uses a JS callback for state updates,
 * and it's going to take a lot of doing to get stdweb to be able
 * to support that while also encapsulating everything.
 *
 * This is because stdweb doesn't have an "export object" macro, and the
 * only way that i've found to actually call javascript
 * callbacks is to create  JS object using the js!{} macro and then call that selfsame
 * object using the same macro... which means I need to be able to reference it from another scope,
 * which means it has to be on the window (for now).
 *
 * export_js! exists but it requires that everything you return have a static lifetime or
 * be Copy - this means any callbacks you return must also be static, which means they
 * can't be part of structs, or refer to structs. it's good for static functions,
 * but bad for exposing any kind of hook to complex state
 */

declare var RustyZ;
export default window.RustyZ;
