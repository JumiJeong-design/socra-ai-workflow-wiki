import{R as e}from"./iframe-Ddm_ZNk3.js";import{T as i,B as l}from"./Tooltip-CehaRpnX.js";import"./preload-helper-PPVm8Dsz.js";const m=[{locale:"English",lang:"en",fontFamily:"var(--font-family-base)",samples:["Tooltip","More options","Create account"]},{locale:"Korean",lang:"ko",fontFamily:"var(--font-family-base)",samples:["도움말","더보기 옵션","계정 만들기"]},{locale:"Japanese",lang:"ja",fontFamily:"var(--font-family-japanese)",samples:["ヘルプ","その他のオプション","アカウントを作成"]}],f={title:"Components/Tooltip",component:i,parameters:{docs:{description:{component:"Figma source: Socra Design system test, Tooltip node 239:85. Tooltip appears on hover or keyboard focus and does not replace an accessible label."}}},argTypes:{content:{control:"text"},position:{control:"select",options:["top","bottom"]},defaultOpen:{control:"boolean"}},args:{content:"Tooltip text",position:"top",defaultOpen:!1}};function a(n){return e.createElement("div",{style:{padding:80}},e.createElement(i,{...n},e.createElement(l,{variant:"solid",size:"m",layout:"iconOnly",ariaLabel:n.content})))}function t(){return e.createElement("div",{style:{alignItems:"center",display:"flex",gap:80,padding:80}},e.createElement(i,{content:"위쪽 툴팁",position:"top",defaultOpen:!0},e.createElement(l,{variant:"solid",size:"m",layout:"iconOnly",ariaLabel:"위쪽 툴팁"})),e.createElement(i,{content:"아래쪽 툴팁",position:"bottom",defaultOpen:!0},e.createElement(l,{variant:"outline",size:"m",layout:"iconOnly",ariaLabel:"아래쪽 툴팁"})))}t.parameters={controls:{disable:!0}};function o(){return e.createElement("div",{style:{display:"grid",gap:52,padding:80}},m.map(({locale:n,lang:r,fontFamily:p,samples:c})=>e.createElement("section",{key:n,lang:r,style:{fontFamily:p}},e.createElement("h3",{style:{color:"#0f172a",fontSize:16,margin:"0 0 24px"}},n),e.createElement("div",{style:{alignItems:"center",display:"grid",gap:"52px 48px",gridTemplateColumns:"repeat(auto-fit, minmax(240px, max-content))"}},c.map(s=>e.createElement("div",{key:`${n}-${s}`,style:{display:"flex",justifyContent:"center",minWidth:240}},e.createElement(i,{content:s,defaultOpen:!0},e.createElement(l,{variant:"solid",size:"m",layout:"iconOnly",ariaLabel:s}))))))))}o.parameters={controls:{disable:!0},docs:{description:{story:"Global label-fit review for Tooltip content in English, Korean, and Japanese. This story keeps Tooltip visible for visual inspection only."}}};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};t.__docgenInfo={description:"",methods:[],displayName:"Positions"};o.__docgenInfo={description:"",methods:[],displayName:"Locales"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`function Playground(args) {
  return <div style={{
    padding: 80
  }}>
      <Tooltip {...args}>
        <Button variant="solid" size="m" layout="iconOnly" ariaLabel={args.content} />
      </Tooltip>
    </div>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`function Positions() {
  return <div style={{
    alignItems: "center",
    display: "flex",
    gap: 80,
    padding: 80
  }}>
      <Tooltip content="위쪽 툴팁" position="top" defaultOpen>
        <Button variant="solid" size="m" layout="iconOnly" ariaLabel="위쪽 툴팁" />
      </Tooltip>
      <Tooltip content="아래쪽 툴팁" position="bottom" defaultOpen>
        <Button variant="outline" size="m" layout="iconOnly" ariaLabel="아래쪽 툴팁" />
      </Tooltip>
    </div>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`function Locales() {
  return <div style={{
    display: "grid",
    gap: 52,
    padding: 80
  }}>
      {localeSamples.map(({
      locale,
      lang,
      fontFamily,
      samples
    }) => <section key={locale} lang={lang} style={{
      fontFamily
    }}>
          <h3 style={{
        color: "#0f172a",
        fontSize: 16,
        margin: "0 0 24px"
      }}>{locale}</h3>
          <div style={{
        alignItems: "center",
        display: "grid",
        gap: "52px 48px",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, max-content))"
      }}>
            {samples.map(sample => <div key={\`\${locale}-\${sample}\`} style={{
          display: "flex",
          justifyContent: "center",
          minWidth: 240
        }}>
                <Tooltip content={sample} defaultOpen>
                  <Button variant="solid" size="m" layout="iconOnly" ariaLabel={sample} />
                </Tooltip>
              </div>)}
          </div>
        </section>)}
    </div>;
}`,...o.parameters?.docs?.source}}};const g=["Playground","Positions","Locales"];export{o as Locales,a as Playground,t as Positions,g as __namedExportsOrder,f as default};
