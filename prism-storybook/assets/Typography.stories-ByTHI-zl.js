import{R as e}from"./iframe-Ddm_ZNk3.js";import"./preload-helper-PPVm8Dsz.js";const l=[[100,"Thin"],[200,"ExtraLight"],[300,"Light"],[400,"Regular"],[500,"Medium"],[600,"SemiBold"],[700,"Bold"],[800,"ExtraBold"],[900,"Black"]],o=[{title:"Pretendard",lang:"ko",fontFamily:"var(--font-family-base)",text:"버튼 Button 계속하기 Create account"},{title:"Pretendard JP",lang:"ja",fontFamily:"var(--font-family-japanese)",text:"ボタン Tooltip アカウントを作成"}],d={title:"Foundation/Typography",parameters:{docs:{description:{component:"Diagnostic typography review for comparing actual browser rendering of self-hosted Pretendard variable fonts."}}}};function n(){return e.createElement("div",{style:{display:"grid",gap:36,minWidth:720}},o.map(t=>e.createElement("section",{key:t.title,lang:t.lang,style:{fontFamily:t.fontFamily}},e.createElement("h3",{style:{color:"#0f172a",fontSize:16,fontWeight:600,margin:"0 0 16px"}},t.title),e.createElement("div",{style:{display:"grid",gap:10}},l.map(([a,i])=>e.createElement("div",{key:`${t.title}-${a}`,style:{alignItems:"baseline",columnGap:24,display:"grid",gridTemplateColumns:"132px 1fr"}},e.createElement("span",{style:{color:"#64748b",fontSize:13,fontWeight:400}},a," / ",i),e.createElement("span",{style:{color:"#0f172a",fontSize:16,fontWeight:a,lineHeight:1.6}},t.text)))))))}n.parameters={controls:{disable:!0}};n.__docgenInfo={description:"",methods:[],displayName:"PretendardWeights"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`function PretendardWeights() {
  return <div style={{
    display: "grid",
    gap: 36,
    minWidth: 720
  }}>
      {samples.map(sample => <section key={sample.title} lang={sample.lang} style={{
      fontFamily: sample.fontFamily
    }}>
          <h3 style={{
        color: "#0f172a",
        fontSize: 16,
        fontWeight: 600,
        margin: "0 0 16px"
      }}>
            {sample.title}
          </h3>
          <div style={{
        display: "grid",
        gap: 10
      }}>
            {weights.map(([weight, label]) => <div key={\`\${sample.title}-\${weight}\`} style={{
          alignItems: "baseline",
          columnGap: 24,
          display: "grid",
          gridTemplateColumns: "132px 1fr"
        }}>
                <span style={{
            color: "#64748b",
            fontSize: 13,
            fontWeight: 400
          }}>
                  {weight} / {label}
                </span>
                <span style={{
            color: "#0f172a",
            fontSize: 16,
            fontWeight: weight,
            lineHeight: 1.6
          }}>
                  {sample.text}
                </span>
              </div>)}
          </div>
        </section>)}
    </div>;
}`,...n.parameters?.docs?.source}}};const p=["PretendardWeights"];export{n as PretendardWeights,p as __namedExportsOrder,d as default};
