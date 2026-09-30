import{S as e,_ as t,a as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,u as h,v as g}from"./dist-cO78BjzP.js";import{t as _}from"./codemirror-6-adapter-CRth9zTh.js";var v=[`east`,`south`,`west`,`north`];function y(e){let n=m(e);return n.length===0?g(h(e)):t(n)}function b(e,t,n,r=e.karel.direction){return y({...e,karel:{avenue:t,street:n,direction:r}})}function x(e,t,n,r){let i=new Map(e.beepers),a=f(t,n);return r===0?i.delete(a):i.set(a,r),y({...e,beepers:i})}function S(e,t,n){return x(e,t,n,c(e,t,n)+1)}function C(e,t,n){if(e.karel.avenue!==t||e.karel.street!==n)return b(e,t,n,e.karel.direction);let r=v[(v.indexOf(e.karel.direction)+1)%v.length];return b(e,t,n,r)}function w(e,t,n,r){let i=new Set(e.walls),o=a(t,n,r);return i.has(o)?i.delete(o):i.add(o),y({...e,walls:i})}function T(e,t){return y({...e,beeperBag:t})}function E(n,r,i){return n.karel.avenue>r||n.karel.street>i||[...n.beepers].some(([e])=>{let t=l(e);return t.avenue>r||t.street>i})||[...n.walls].some(e=>{let t=o(e);return t.avenue>r||t.street>i||t.direction===`east`&&t.avenue>=r||t.direction===`north`&&t.street>=i})?t([e(`world`,`WORLD_RESIZE_WOULD_REMOVE_CONTENT`,`Die Welt kann nicht verkleinert werden, solange Karel, Beeper oder Wände außerhalb der neuen Grenzen liegen.`)]):y({...n,width:r,height:i})}function D(e,t,n){return e!==`wall`||t.wall!==void 0?t:{...t,wall:{avenue:t.avenue,street:t.street,direction:n}}}function O(e,t){return t.wall===void 0?`${e}:${t.avenue}:${t.street}`:`${e}:${a(t.wall.avenue,t.wall.street,t.wall.direction)}`}function k(e,t,n,r,i,o){return t===`karel`?r?b(e,n.avenue,n.street,i):C(e,n.avenue,n.street):t===`beeper`?r?x(e,n.avenue,n.street,o):S(e,n.avenue,n.street):t===`wall`&&n.wall!==void 0||n.wall!==void 0&&e.walls.has(a(n.wall.avenue,n.wall.street,n.wall.direction))?w(e,n.wall.avenue,n.wall.street,n.wall.direction):x(e,n.avenue,n.street,0)}function A(e,t,n,r){let i=e=>{let n=t.querySelector(e);if(n===null)throw Error(`Fehlendes Welteditor-Element: ${e}`);return n};for(let e of t.querySelectorAll(`[data-tool]`))e.addEventListener(`click`,()=>r.selectTool(e.dataset.tool),{signal:n});i(`#undo`).addEventListener(`click`,r.undo,{signal:n}),i(`#redo`).addEventListener(`click`,r.redo,{signal:n}),i(`#apply`).addEventListener(`click`,()=>r.applyAt(r.inspectorHit(),!0),{signal:n}),i(`#resize`).addEventListener(`click`,r.resize,{signal:n}),i(`#set-bag`).addEventListener(`click`,r.setBag,{signal:n}),i(`#bag-kind`).addEventListener(`change`,r.bagKindChanged,{signal:n}),i(`#apply-json`).addEventListener(`click`,r.importJson,{signal:n}),i(`#refresh-json`).addEventListener(`click`,r.refreshJson,{signal:n}),i(`#save-file`).addEventListener(`click`,r.saveFile,{signal:n}),i(`#world-file`).addEventListener(`change`,e=>{let t=e.currentTarget,n=t.files?.[0];n!==void 0&&r.importFile(n),t.value=``},{signal:n}),i(`#zoom-in`).addEventListener(`click`,()=>{r.renderer.zoomBy(.5),r.viewChanged()},{signal:n}),i(`#zoom-out`).addEventListener(`click`,()=>{r.renderer.zoomBy(-.5),r.viewChanged()},{signal:n}),i(`#zoom-reset`).addEventListener(`click`,()=>{r.renderer.resetView(),r.viewChanged()},{signal:n}),j(e,i(`#board`),n,r)}function j(e,t,n,r){let i;t.addEventListener(`pointerdown`,e=>{t.setPointerCapture(e.pointerId);let n=r.getTool(),a=r.renderer.hitTest(e.clientX,e.clientY),o=n===`wall`?a?.wall?.direction??r.getWallDirection():n===`erase`?a?.wall?.direction:void 0;if(i={pointerId:e.pointerId,lastX:e.clientX,lastY:e.clientY,visited:new Set,tool:n,...o===void 0?{}:{wallDirection:o}},n===`pan`){r.hover(void 0),r.setPanning(!0);return}a!==void 0&&(r.selectHit(a),P(n)||(r.beginPaint(),r.applyAt(a,!1,i.visited)))},{signal:n}),t.addEventListener(`pointermove`,e=>{if(i===void 0){r.hover(r.renderer.hitTest(e.clientX,e.clientY));return}let t=e.clientX-i.lastX,n=e.clientY-i.lastY;if(i.tool===`pan`)r.renderer.panBy(t,n);else{let t=r.renderer.hitTest(e.clientX,e.clientY,i.wallDirection);r.hover(t),t!==void 0&&![`select`,`karel`].includes(i.tool)&&r.applyAt(t,!1,i.visited)}i.lastX=e.clientX,i.lastY=e.clientY},{signal:n}),t.addEventListener(`pointerleave`,()=>r.hover(void 0),{signal:n}),t.addEventListener(`pointerup`,e=>{if(i?.pointerId!==e.pointerId)return;let t=i.visited.size>0,n=i.tool===`pan`;i=void 0,n&&r.setPanning(!1),t&&r.paintCompleted()},{signal:n}),t.addEventListener(`pointercancel`,()=>{let e=(i?.visited.size??0)>0,t=i?.tool===`pan`;i=void 0,t&&r.setPanning(!1),e&&r.paintCompleted()},{signal:n}),t.addEventListener(`keydown`,e=>M(e,r),{signal:n}),e.addEventListener(`keydown`,e=>N(e,r),{signal:n})}function M(e,t){if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Enter`].includes(e.key))return;if(e.preventDefault(),e.key===`Enter`)return t.applyAt(t.inspectorHit(),!0);let n=t.getSelected(),r=t.getWorld(),i=e.key===`ArrowLeft`?-1:+(e.key===`ArrowRight`),a=e.key===`ArrowDown`?-1:+(e.key===`ArrowUp`);t.selectHit({avenue:Math.min(r.width,Math.max(1,n.avenue+i)),street:Math.min(r.height,Math.max(1,n.street+a))})}function N(e,t){if([`INPUT`,`SELECT`,`TEXTAREA`].includes(e.target.tagName))return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`z`)return e.preventDefault(),e.shiftKey?t.redo():t.undo();let n={s:`select`,p:`pan`,k:`karel`,b:`beeper`,w:`wall`,e:`erase`}[e.key.toLowerCase()];n!==void 0&&(e.preventDefault(),t.selectTool(n))}function P(e){return e===`select`||e===`pan`}function F(){let e=document.createElement(`template`);return e.innerHTML=`
  <style>
    :host { --ink:#17211b; --muted:#607067; --line:#dce4da; --accent:#176b4d; display:block; container-type:inline-size; color:var(--ink); font:13px/1.4 Inter,ui-sans-serif,system-ui,sans-serif; }
    * { box-sizing:border-box; }
    button,input,select,textarea { font:inherit; }
    .shell { display:grid; grid-template-columns:132px minmax(320px,1fr) 210px; min-height:520px; overflow:hidden; border:1px solid var(--line); border-radius:14px; background:#fff; box-shadow:0 16px 42px rgb(35 60 45 / 8%); }
    .palette,.inspector { padding:10px; background:#f8faf7; }
    .palette { border-right:1px solid var(--line); }
    .inspector { border-left:1px solid var(--line); }
    h2 { margin:0 0 3px; font:600 18px/1.2 Georgia,serif; }
    .help { margin:0 0 10px; color:var(--muted); font-size:11px; }
    .tools { display:grid; gap:4px; }
    button,.file-label { min-height:32px; padding:5px 8px; border:1px solid var(--line); border-radius:7px; background:#fff; color:var(--ink); font-weight:700; text-align:left; cursor:pointer; }
    button:hover:not(:disabled),.file-label:hover { border-color:#9eaea2; background:#f4f8f3; }
    button[aria-pressed="true"] { border-color:var(--accent); background:#dceee4; color:var(--accent); }
    button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,.file-label:focus-within { outline:3px solid rgb(44 132 94 / 28%); outline-offset:2px; }
    button:disabled { opacity:.42; cursor:not-allowed; }
    input:disabled { opacity:.58; cursor:not-allowed; background:#edf1ec; }
    .history { display:grid; grid-template-columns:1fr 1fr; gap:4px; margin-top:10px; }
    .tool-status,.selection-summary,.bag-summary { margin:7px 0 0; color:var(--muted); font-size:10px; overflow-wrap:anywhere; }
    .board-shell { position:relative; min-width:0; min-height:520px; overflow:hidden; background:#edf4ec; }
    canvas { position:absolute; inset:0; display:block; width:100%; height:100%; min-height:0; touch-action:none; cursor:crosshair; }
    canvas[data-panning="true"] { cursor:grabbing !important; }
    .view { position:absolute; right:8px; top:8px; display:flex; gap:3px; padding:3px; border:1px solid var(--line); border-radius:9px; background:rgb(255 255 255 / 90%); }
    .view button { min-width:30px; min-height:30px; padding:2px 7px; text-align:center; }
    fieldset { display:grid; gap:6px; margin:0 0 10px; padding:0; border:0; }
    legend { margin-bottom:5px; color:var(--muted); font-size:9px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
    label { display:grid; gap:3px; color:var(--muted); font-size:10px; font-weight:750; }
    input,select,textarea { width:100%; min-height:32px; padding:5px 7px; border:1px solid var(--line); border-radius:7px; background:#fff; color:var(--ink); }
    .pair { display:grid; grid-template-columns:1fr 1fr; gap:5px; }
    .apply { width:100%; text-align:center; }
    .status { min-height:24px; margin:8px 0 0; color:var(--muted); font-size:11px; font-weight:700; overflow-wrap:anywhere; }
    .status.error { color:#a83e34; }
    details { border-top:1px solid var(--line); padding-top:8px; }
    summary { cursor:pointer; font-weight:750; }
    textarea { min-height:100px; margin-top:6px; resize:vertical; font:10px/1.4 monospace; }
    .file-actions,.json-actions { display:grid; grid-template-columns:1fr 1fr; gap:4px; margin-top:4px; }
    .file-actions { margin:0; }
    .file-actions button,.file-label,.json-actions button { display:flex; align-items:center; justify-content:center; text-align:center; }
    .file-input { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    @container(max-width:760px) { .shell { grid-template-columns:116px minmax(280px,1fr); } .inspector { grid-column:1/-1; border-top:1px solid var(--line); border-left:0; } }
    @container(max-width:560px) { .shell { display:block; } .palette { border-right:0; border-bottom:1px solid var(--line); } .tools { grid-template-columns:repeat(3,1fr); } .board-shell { min-height:0; height:clamp(340px,90cqi,440px); } .inspector { border-top:1px solid var(--line); } }
    @media(prefers-reduced-motion:reduce) { * { transition-duration:.01ms !important; animation-duration:.01ms !important; } }
  </style>
  <div class="shell">
    <aside class="palette" aria-label="Werkzeugpalette">
      <h2>Welteditor</h2><p class="help">Werkzeug wählen und in der Welt malen.</p>
      <div class="tools" role="toolbar" aria-label="Werkzeuge">
        <button data-tool="select" aria-pressed="true" title="Auswählen (S)">↖ Auswählen</button>
        <button data-tool="pan" aria-pressed="false" aria-describedby="view-status" title="Ansicht verschieben (P)" disabled>✥ Ansicht</button>
        <button data-tool="karel" aria-pressed="false" title="Karel setzen (K)">▲ Karel</button>
        <button data-tool="beeper" aria-pressed="false" title="Beeper setzen (B)">● Beeper</button>
        <button data-tool="wall" aria-pressed="false" title="Wand zeichnen (W)">━ Wand</button>
        <button data-tool="erase" aria-pressed="false" title="Löschen (E)">⌫ Löschen</button>
      </div>
      <div class="history"><button id="undo" title="Rückgängig (Strg+Z)">↶ Undo</button><button id="redo" title="Wiederholen (Strg+Umschalt+Z)">↷ Redo</button></div>
      <p class="tool-status" id="view-status">Zum Verschieben zuerst vergrößern.</p>
    </aside>
    <div class="board-shell">
      <canvas id="board" tabindex="0" aria-label="Bearbeitbare Karel-Welt. Pfeiltasten wählen eine Zelle, Enter wendet das Werkzeug an."></canvas>
      <div class="view" aria-label="Ansicht"><button id="zoom-out" title="Verkleinern">−</button><button id="zoom-reset" title="Einpassen">⌂</button><button id="zoom-in" title="Vergrößern">+</button></div>
    </div>
    <aside class="inspector" aria-label="Eigenschaften">
      <fieldset><legend>Auswahl</legend>
        <div class="pair"><label>Avenue<input id="avenue" type="number" min="1" value="1"></label><label>Street<input id="street" type="number" min="1" value="1"></label></div>
        <p class="selection-summary" id="selection-summary">Avenue 1, Street 1</p>
        <label>Richtung<select id="direction"><option value="north">Nord</option><option value="east" selected>Ost</option><option value="south">Süd</option><option value="west">West</option></select></label>
        <label>Beeper-Anzahl<input id="beepers" type="number" min="0" value="0"></label>
        <label>Wandkante<select id="wall-direction"><option value="north">Nord</option><option value="east">Ost</option></select></label>
        <button class="apply" id="apply" disabled>Auswahl ansehen</button>
      </fieldset>
      <fieldset><legend>Welt</legend>
        <div class="pair"><label>Avenues<input id="width" type="number" min="1" max="50" value="10"></label><label>Streets<input id="height" type="number" min="1" max="50" value="10"></label></div>
        <button class="apply" id="resize">Größe anwenden</button>
        <label>Beeper-Bag<select id="bag-kind" aria-describedby="bag-summary"><option value="infinite">Unendlich</option><option value="finite">Begrenzt</option></select></label>
        <label>Anzahl<input id="bag-count" type="number" min="0" value="0" disabled></label>
        <p class="bag-summary" id="bag-summary">Aktuell: unendlich viele Beeper</p>
        <button class="apply" id="set-bag">Start-Bag speichern</button>
      </fieldset>
      <fieldset><legend>Weltdatei</legend><div class="file-actions">
        <label class="file-label">Welt laden …<input class="file-input" id="world-file" type="file" accept=".json,application/json"></label>
        <button id="save-file" type="button">Welt speichern …</button>
      </div></fieldset>
      <details><summary>JSON anzeigen oder einfügen</summary><textarea id="json" aria-label="Welt als JSON"></textarea><div class="json-actions"><button id="apply-json" type="button">JSON übernehmen</button><button id="refresh-json" type="button">JSON aktualisieren</button></div></details>
      <p class="status" id="status" aria-live="polite"></p>
    </aside>
  </div>`,e}var I=class{root;renderer;constructor(e,t){this.root=e,this.renderer=t}render(e,t,n,r,i,a){this.renderer.setWorld(e),this.renderSelection(e,t,n),this.q(`#width`).value=String(e.width),this.q(`#height`).value=String(e.height),this.q(`#avenue`).max=String(e.width),this.q(`#street`).max=String(e.height),this.q(`#bag-kind`).value=e.beeperBag.kind,this.q(`#bag-count`).value=e.beeperBag.kind===`finite`?String(e.beeperBag.count):`0`,this.updateBagControls(e.beeperBag.kind===`infinite`?`Aktuell: unendlich viele Beeper`:`Aktuell: ${e.beeperBag.count} Beeper`),this.q(`#undo`).disabled=!r,this.q(`#redo`).disabled=!i,this.selectTool(a),this.renderViewState(),this.writeJson(e,!1)}overlay(e,t){this.renderer.setEditorOverlay({selected:e,...t===void 0?{}:{hover:t}})}inspectorHit(e){let t=this.number(`#avenue`),n=this.number(`#street`);return e===`wall`?{avenue:t,street:n,wall:{avenue:t,street:n,direction:this.q(`#wall-direction`).value}}:{avenue:t,street:n}}selectTool(e){for(let t of this.root.querySelectorAll(`[data-tool]`))t.setAttribute(`aria-pressed`,String(t.dataset.tool===e));let t=this.q(`#board`);t.style.cursor=e===`pan`?`grab`:e===`select`?`default`:`crosshair`,t.dataset.panning=`false`;let n=this.q(`#apply`);n.textContent={select:`Auswahl ansehen`,pan:`Ansicht verschieben`,karel:`Karel exakt setzen`,beeper:`Beeper-Anzahl setzen`,wall:`Wand umschalten`,erase:`Auswahl löschen`}[e],n.disabled=e===`select`||e===`pan`}selectHit(e,t,n){this.renderSelection(e,t,n)}setPanning(e){this.q(`#board`).dataset.panning=String(e)}renderViewState(){let e=this.renderer.zoomLevel,t=this.renderer.canPan;this.q(`#zoom-out`).disabled=e<=1,this.q(`#zoom-reset`).disabled=e<=1,this.q(`#zoom-in`).disabled=e>=4,this.q(`[data-tool="pan"]`).disabled=!t,this.q(`#view-status`).textContent=t?`Zoom ${Math.round(e*100)} %. Die Ansicht kann gezogen werden.`:`Zum Verschieben zuerst vergrößern.`}updateBagControls(e){let t=this.q(`#bag-kind`).value===`finite`,n=this.q(`#bag-count`);n.disabled=!t,this.q(`#bag-summary`).textContent=e??(t?`Neuer Start-Bag: ${n.value||`0`} Beeper (noch nicht gespeichert)`:`Neuer Start-Bag: unendlich (noch nicht gespeichert)`)}async importFile(e,t){try{this.decodeAndImport(await e.text(),t)}catch{this.message(`Die ausgewählte Weltdatei konnte nicht gelesen werden.`,!0)}}downloadJson(e){let t=URL.createObjectURL(new Blob([n(e,`Karel-Welt`)],{type:`application/json;charset=utf-8`})),r=document.createElement(`a`);r.href=t,r.download=`karel-world.json`,r.hidden=!0,this.root.append(r),r.click(),r.remove(),queueMicrotask(()=>URL.revokeObjectURL(t)),this.message(`Welt als karel-world.json gespeichert.`)}renderSelection(e,t,n){this.q(`#avenue`).value=String(t.avenue),this.q(`#street`).value=String(t.street);let r=c(e,t.avenue,t.street);this.q(`#beepers`).value=String(r);let i=e.karel.avenue===t.avenue&&e.karel.street===t.street;i&&(this.q(`#direction`).value=e.karel.direction),t.wall!==void 0&&(this.q(`#wall-direction`).value=t.wall.direction);let a=this.wallLabels(e,t.avenue,t.street),o=i?`Karel: ${this.directionLabel(e.karel.direction)}`:`kein Karel`;this.q(`#selection-summary`).textContent=`Avenue ${t.avenue}, Street ${t.street} · ${o} · ${r} Beeper · Wände: ${a.length===0?`keine`:a.join(`, `)}`,this.overlay(t,n)}importJson(e){this.decodeAndImport(this.q(`#json`).value,e)}decodeAndImport(e,t){let n=s(e);if(!n.ok){this.message(n.error.map(e=>`${e.path??e.code}: ${e.message}`).join(` · `),!0);return}t(n.value.world)}writeJson(e,t=!0){let r=this.q(`#json`);!t&&this.root.activeElement===r||(r.value=n(e,`Karel-Welt`))}message(e,t=!1){let n=this.q(`#status`);n.textContent=e,n.classList.toggle(`error`,t)}wallLabels(e,t,n){let r=[];return(n===e.height||e.walls.has(a(t,n,`north`)))&&r.push(`Nord`),(t===e.width||e.walls.has(a(t,n,`east`)))&&r.push(`Ost`),(n===1||e.walls.has(a(t,n-1,`north`)))&&r.push(`Süd`),(t===1||e.walls.has(a(t-1,n,`east`)))&&r.push(`West`),r}directionLabel(e){return{north:`Nord`,east:`Ost`,south:`Süd`,west:`West`}[e]}number(e){return Number(this.q(e).value)}q(e){let t=this.root.querySelector(e);if(t===null)throw Error(`Fehlendes Welteditor-Element: ${e}`);return t}},L=class{undoStack=[];redoStack=[];get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}clear(){this.undoStack=[],this.redoStack=[]}record(e){this.undoStack.push(h(e)),this.undoStack.length>100&&this.undoStack.shift(),this.redoStack=[]}undo(e){let t=this.undoStack.pop();return t!==void 0&&this.redoStack.push(h(e)),t}redo(e){let t=this.redoStack.pop();return t!==void 0&&this.undoStack.push(h(e)),t}};function R(e,t,n){e.dispatchEvent(new CustomEvent(`karel-world-editor-change`,{detail:{world:t,command:n},bubbles:!0,composed:!0}))}var z=class extends HTMLElement{root=this.attachShadow({mode:`open`});currentWorld=r();renderer;view;tool=`select`;selected={avenue:1,street:1};hover;history=new L;abort;connectedCallback(){this.renderer===void 0&&(this.upgradeProperty(`world`),this.root.replaceChildren(F().content.cloneNode(!0)),this.abort=new AbortController,this.renderer=new p(this.q(`#board`)),this.view=new I(this.root,this.renderer),this.bind(),this.render())}disconnectedCallback(){this.abort?.abort(),this.abort=void 0,this.renderer?.dispose(),this.renderer=void 0,this.view=void 0}get world(){return h(this.currentWorld)}set world(e){let t=!i(this.currentWorld,e);this.currentWorld=h(e),t&&this.history.clear(),this.selected={avenue:Math.min(e.width,Math.max(1,this.selected.avenue)),street:Math.min(e.height,Math.max(1,this.selected.street))},this.render()}bind(){A(this,this.root,this.abort.signal,{renderer:this.renderer,getTool:()=>this.tool,getWorld:()=>this.currentWorld,getSelected:()=>this.selected,getWallDirection:()=>this.q(`#wall-direction`).value,selectTool:e=>this.selectTool(e),selectHit:e=>this.selectHit(e),hover:e=>{this.hover=e,this.renderOverlay()},setPanning:e=>this.view?.setPanning(e),viewChanged:()=>this.viewChanged(),applyAt:(e,t,n)=>this.applyAt(e,t,n),beginPaint:()=>this.pushUndo(),paintCompleted:()=>this.emitChange(`Malen`),undo:()=>this.undo(),redo:()=>this.redo(),resize:()=>this.resize(),setBag:()=>this.setBag(),bagKindChanged:()=>this.view?.updateBagControls(),importJson:()=>this.importJson(),importFile:e=>this.importFile(e),saveFile:()=>this.view?.downloadJson(this.currentWorld),refreshJson:()=>this.view?.writeJson(this.currentWorld),inspectorHit:()=>this.inspectorHit()})}resize(){this.applyResult(E(this.currentWorld,this.number(`#width`),this.number(`#height`)),`Größe geändert`,!0)}setBag(){let e=this.q(`#bag-kind`).value===`finite`,t=this.number(`#bag-count`);this.applyResult(T(this.currentWorld,e?{kind:`finite`,count:t}:{kind:`infinite`}),e?`Start-Bag: ${t} Beeper`:`Start-Bag: unendlich`,!0)}applyAt(e,t,n){if(this.tool===`select`){this.selectHit(e);return}if(this.tool===`pan`)return;let r=D(this.tool,e,this.q(`#wall-direction`).value),i=O(this.tool,r);if(n?.has(i)===!0)return;n?.add(i);let a=k(this.currentWorld,this.tool,r,t,this.q(`#direction`).value,this.number(`#beepers`));this.applyResult(a,`${this.tool} angewendet`,t)}applyResult(e,t,n){if(!e.ok){this.message(e.error[0]?.message??`Änderung nicht möglich.`,!0);return}n&&this.pushUndo(),this.currentWorld=h(e.value),this.message(t),this.render(),n&&this.emitChange(t)}pushUndo(){this.history.record(this.currentWorld)}undo(){let e=this.history.undo(this.currentWorld);e!==void 0&&(this.currentWorld=e,this.render(),this.emitChange(`Undo`))}redo(){let e=this.history.redo(this.currentWorld);e!==void 0&&(this.currentWorld=e,this.render(),this.emitChange(`Redo`))}selectTool(e){if(e===`pan`&&this.renderer?.canPan!==!0){this.message(`Zum Verschieben zuerst die Ansicht vergrößern.`),this.view?.renderViewState();return}this.tool=e,this.view?.selectTool(e)}selectHit(e){this.selected=e,this.view?.selectHit(this.currentWorld,e,this.hover)}inspectorHit(){return this.view?.inspectorHit(this.tool)??this.selected}render(){this.view?.render(this.currentWorld,this.selected,this.hover,this.history.canUndo,this.history.canRedo,this.tool)}renderOverlay(){this.view?.overlay(this.selected,this.hover)}importJson(){this.view?.importJson(e=>{this.replaceWorld(e,`JSON aus Text übernommen`)})}async importFile(e){await this.view?.importFile(e,t=>{this.replaceWorld(t,`Weltdatei „${e.name}“ geladen`)})}replaceWorld(e,t){this.pushUndo(),this.currentWorld=h(e),this.selected={avenue:Math.min(e.width,Math.max(1,this.selected.avenue)),street:Math.min(e.height,Math.max(1,this.selected.street))},this.render(),this.message(t),this.emitChange(t)}viewChanged(){this.tool===`pan`&&this.renderer?.canPan!==!0&&(this.tool=`select`,this.view?.selectTool(this.tool)),this.view?.renderViewState()}emitChange(e){R(this,this.world,e)}message(e,t=!1){this.view?.message(e,t)}number(e){return Number(this.q(e).value)}q(e){let t=this.root.querySelector(e);if(t===null)throw Error(`Fehlendes Welteditor-Element: ${e}`);return t}upgradeProperty(e){if(!Object.prototype.hasOwnProperty.call(this,e))return;let t=this[e];delete this[e],this[e]=t}};function B(){customElements.get(`karel-world-editor`)||customElements.define(`karel-world-editor`,z)}function V(e,t){return{...e,beepers:new Map((t.beepers??[]).map(([e,t,n])=>[f(e,t),n])),walls:new Set((t.walls??[]).map(([e,t,n])=>a(e,t,n)))}}var H=[[1,4,1],[1,5,1],[5,1,1],[5,2,1],[5,4,1],[9,3,1],[9,5,1],[13,1,1],[13,3,1],[13,5,1]],U=[[1,5,`north`],[1,6,`east`],[2,6,`north`],[2,7,`east`],[3,7,`north`],[3,7,`east`],[4,6,`north`],[4,6,`east`],[5,5,`north`],[5,6,`east`],[6,6,`north`],[6,7,`east`],[7,7,`north`],[7,7,`east`],[8,6,`north`],[8,6,`east`],[9,5,`north`],[9,6,`east`],[10,6,`north`],[10,7,`east`],[11,7,`north`],[11,7,`east`],[12,6,`north`],[12,6,`east`],[13,5,`north`]],W=[1,2,3,4,5].flatMap(e=>[1,5,9,13].map(t=>({avenue:t,street:e,count:1}))),G=[{id:`corridor`,label:`Korridor bis zur Wand`,source:`void main() {
    while (frontIsClear()) {
        move();
    }
}
`,world:d(r({width:7,height:3,avenue:1,street:2})),expected:{kind:`success`,actions:6,karel:{avenue:7,street:2,direction:`east`},beeperBag:{kind:`infinite`}}},{id:`beeper-line`,label:`Beeper einsammeln`,source:`void main() {
    while (frontIsClear()) {
        if (beepersPresent()) {
            pickBeeper();
        }
        move();
    }
    if (beepersPresent()) {
        pickBeeper();
    }
}
`,world:d(V(r({width:6,height:3,avenue:1,street:2,beeperBag:{kind:`finite`,count:0}}),{beepers:[[2,2,1],[4,2,3],[6,2,1]]})),expected:{kind:`success`,actions:8,karel:{avenue:6,street:2,direction:`east`},beeperBag:{kind:`finite`,count:3},beepers:[{avenue:4,street:2,count:2}]}},{id:`recursive`,label:`Terminierende Rekursion`,source:`void walk() {
    if (frontIsClear()) {
        move();
        walk();
    }
}

void main() {
    walk();
}
`,world:d(r({width:8,height:4,avenue:2,street:2})),expected:{kind:`success`,actions:6,karel:{avenue:8,street:2,direction:`east`},beeperBag:{kind:`infinite`}}},{id:`walls-and-beepers`,label:`Wände und mehrere Beeper`,source:`void main() {
    for (int i = 0; i < 3; i++) {
        putBeeper();
        if (frontIsClear()) {
            move();
        }
    }
}
`,world:d(V(r({width:6,height:6,avenue:2,street:2}),{beepers:[[3,4,5],[5,2,2]],walls:[[2,2,`north`],[3,2,`east`],[4,4,`north`],[4,4,`east`]]})),expected:{kind:`success`,actions:4,karel:{avenue:3,street:2,direction:`east`},beeperBag:{kind:`infinite`},beepers:[{avenue:2,street:2,count:1},{avenue:3,street:2,count:2},{avenue:5,street:2,count:2},{avenue:3,street:4,count:5}]}},{id:`exercise-2-1-repair-pillars`,label:`Aufgabe 2.1 – Karel repariert`,source:`void turnAround() {
    turnLeft();
    turnLeft();
}

void repairPillar() {
    turnLeft();
    while (frontIsClear()) {
        if (noBeepersPresent()) {
            putBeeper();
        }
        move();
    }
    if (noBeepersPresent()) {
        putBeeper();
    }
    turnAround();
    while (frontIsClear()) {
        move();
    }
    turnLeft();
}

void moveToNextPillar() {
    for (int i = 0; i < 4; i++) {
        move();
    }
}

void main() {
    repairPillar();
    while (frontIsClear()) {
        moveToNextPillar();
        repairPillar();
    }
}
`,world:d(V(r({width:13,height:13,avenue:1,street:1,direction:`east`,beeperBag:{kind:`infinite`}}),{beepers:H,walls:U}),`Aufgabe 2.1 – Beschädigte Säulen`),expected:{kind:`success`,actions:70,karel:{avenue:13,street:1,direction:`east`},beeperBag:{kind:`infinite`},beepers:W}},{id:`syntax-error`,label:`Fehlerhafter Quelltext`,source:`void main() {
    while (frontIsClear() {
        move()
    }
}
`,world:d(r()),expected:{kind:`error`,codes:[`EXPECTED_RIGHT_PAREN`,`EXPECTED_SEMICOLON`]}}].map(e=>{let t=s(e.world);if(!t.ok)throw Error(`Ungültiges eingebautes Fixture: ${e.id}`);return{id:e.id,label:e.label,source:e.source,world:t.value.world}});u({editorFactory:(e,t)=>new _(e,t)}),B();var K=document.querySelector(`karel-runner`),q=document.querySelector(`karel-world-editor`),J=document.querySelector(`#fixture`),Y=document.querySelector(`#lab-message`);if(K!==null&&q!==null&&(q.world=K.world,K.addEventListener(`karel-world-change`,e=>{q.world=e.detail.world}),q.addEventListener(`karel-world-editor-change`,e=>{K.world=e.detail.world})),J!==null)for(let e of G)J.add(new Option(e.label,e.id));document.querySelector(`#load-fixture`)?.addEventListener(`click`,()=>{let e=G.find(e=>e.id===J?.value);if(K===null||e===void 0)return X(`Bitte zuerst ein Fixture wählen.`,!0);K.source=e.source,K.world=e.world,X(`„${e.label}“ geladen.`)}),document.querySelector(`#discard-plan`)?.addEventListener(`click`,()=>{K!==null&&(K.world=K.world)});function X(e,t=!1){Y!==null&&(Y.textContent=e,Y.classList.toggle(`error`,t))}