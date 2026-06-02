import{R as e}from"./iframe-Ddm_ZNk3.js";import{B as t,T as h}from"./Tooltip-CehaRpnX.js";import"./preload-helper-PPVm8Dsz.js";const y={file:"Socra Design system test",node:"17:184",sizes:{s:"default text min-width 80px / with icon min-width 84px, height 32px, font 14px regular",m:"default text min-width 96px / with icon min-width 97px, height 40px, font 16px medium",l:"withText min-width 120px, height 48px, font 17px medium, icon 24px"}},b={borderCollapse:"separate",borderSpacing:"24px 16px"},x={padding:"4px 0",textAlign:"center",verticalAlign:"middle"},f={color:"#0f172a",fontSize:13,fontWeight:600,padding:"4px 8px",textAlign:"center",verticalAlign:"middle"},z=[{locale:"English",lang:"en",fontFamily:"var(--font-family-base)",samples:{short:"Button",default:"Continue",long:"Create account"}},{locale:"Korean",lang:"ko",fontFamily:"var(--font-family-base)",samples:{short:"버튼",default:"계속하기",long:"계정 만들기"}},{locale:"Japanese",lang:"ja",fontFamily:"var(--font-family-japanese)",samples:{short:"ボタン",default:"続ける",long:"アカウントを作成"}}],L={title:"Components/Button",component:t,parameters:{docs:{description:{component:`Figma source: ${y.file}, Button node ${y.node}. Storybook page chrome may differ from Figma; rendered Button internals must match the Figma source.`}}},argTypes:{variant:{control:"select",options:["solid","outline","ghost"]},size:{control:"select",options:["s","m","l"]},state:{control:"select",options:["enabled","engaged","loading","disabled"]},layout:{control:"select",options:["withText","iconOnly"]},children:{control:"text"},showIcon:{control:"boolean"},ariaLabel:{control:"text"}},args:{children:"Button",variant:"solid",size:"m",state:"enabled",layout:"withText",showIcon:!1}};function g(l){return e.createElement(t,{...l})}function d(){const l=[["enabled","Enabled"],["engaged","Engaged"],["loading","Loading"],["disabled","Disabled"]];return e.createElement("div",{style:{display:"grid",gap:28}},e.createElement("section",null,e.createElement("h3",{style:{fontSize:13,margin:"0 0 10px"}},"Variants"),e.createElement("div",{style:{alignItems:"center",display:"flex",flexWrap:"wrap",gap:16}},e.createElement(t,{variant:"solid",size:"m"},"Button"),e.createElement(t,{variant:"outline",size:"m"},"Button"),e.createElement(t,{variant:"ghost",size:"m"},"Button"))),e.createElement("section",null,e.createElement("h3",{style:{fontSize:13,margin:"0 0 10px"}},"Sizes"),e.createElement("div",{style:{alignItems:"center",display:"flex",flexWrap:"wrap",gap:16}},e.createElement(t,{variant:"solid",size:"s"},"Button"),e.createElement(t,{variant:"solid",size:"m"},"Button"),e.createElement(t,{variant:"solid",size:"l"},"Button"))),e.createElement("section",null,e.createElement("h3",{style:{fontSize:13,margin:"0 0 10px"}},"Mobile-first States"),e.createElement("div",{style:{alignItems:"center",display:"flex",flexWrap:"wrap",gap:16}},l.map(([r,n])=>e.createElement("div",{key:r,style:{display:"grid",gap:6,justifyItems:"start"}},e.createElement("span",{style:{color:"#64748b",fontSize:12}},n),e.createElement(t,{variant:"solid",size:"m",state:r},"Button"))))),e.createElement("section",null,e.createElement("h3",{style:{fontSize:13,margin:"0 0 10px"}},"Icon Options"),e.createElement("div",{style:{alignItems:"center",display:"flex",flexWrap:"wrap",gap:16}},e.createElement(t,{variant:"solid",size:"m",showIcon:!0},"With icon"),e.createElement(t,{variant:"solid",size:"m"},"Text only"),e.createElement(t,{variant:"outline",size:"m",showIcon:!0},"With icon"),e.createElement(t,{variant:"solid",size:"s",layout:"iconOnly",ariaLabel:"Arrow action"}),e.createElement(t,{variant:"solid",size:"m",layout:"iconOnly",ariaLabel:"Arrow action"}),e.createElement(t,{variant:"solid",size:"l",layout:"iconOnly",ariaLabel:"Arrow action"}))),e.createElement("section",null,e.createElement("h3",{style:{fontSize:13,margin:"0 0 10px"}},"Icon-only Tooltip Pairing"),e.createElement("div",{style:{alignItems:"flex-end",display:"flex",flexWrap:"wrap",gap:24}},e.createElement(h,{content:"뒤로 가기"},e.createElement(t,{variant:"solid",size:"m",layout:"iconOnly",ariaLabel:"뒤로 가기"})),e.createElement(h,{content:"뒤로 가기",position:"bottom"},e.createElement(t,{variant:"outline",size:"m",layout:"iconOnly",ariaLabel:"뒤로 가기"})))))}d.parameters={controls:{disable:!0},docs:{description:{story:`Designer-facing summary surface for representative size, variant, state, and icon samples. Figma source sizes: S ${y.sizes.s}; M ${y.sizes.m}; L ${y.sizes.l}.`}}};function c(){const l=["solid","outline","ghost"],r=["s","m","l"],n=["enabled","engaged","loading","disabled"],u=[{id:"textOnly",label:"Text only",props:{layout:"withText",showIcon:!1}},{id:"withIcon",label:"With icon",props:{layout:"withText",showIcon:!0}},{id:"iconOnly",label:"Icon only",props:{layout:"iconOnly",showIcon:!0,ariaLabel:"Arrow action"}}];return e.createElement("div",{style:{display:"grid",gap:36}},u.map(a=>e.createElement("section",{key:a.id},e.createElement("h3",{style:{color:"#0f172a",fontSize:16,margin:"0 0 12px"}},a.label),e.createElement("table",{style:b},e.createElement("tbody",null,l.map(i=>e.createElement(e.Fragment,{key:`${a.id}-${i}`},e.createElement("tr",null,e.createElement("th",{colSpan:5,style:{...f,fontSize:16,paddingTop:18}},i)),r.map(o=>e.createElement("tr",{key:`${a.id}-${i}-${o}`},e.createElement("th",{style:f},o),n.map(m=>e.createElement("td",{key:`${a.id}-${i}-${o}-${m}`,style:x},e.createElement(t,{...a.props,variant:i,size:o,state:m},"Button"))))))))))))}c.parameters={controls:{disable:!0},docs:{description:{story:"Full regression review surface for every text-only, with-icon, and icon-only Button combination."}}};function p(){const l=["s","m","l"],r=[[{id:"short",label:"Short",getLabel:n=>n.short,props:{variant:"solid"}},{id:"default",label:"Default",getLabel:n=>n.default,props:{variant:"solid"}},{id:"long",label:"Long",getLabel:n=>n.long,props:{variant:"solid"}}],[{id:"solidLong",label:"Solid long",getLabel:n=>n.long,props:{variant:"solid"}},{id:"outlineLong",label:"Outline long",getLabel:n=>n.long,props:{variant:"outline"}},{id:"ghostLong",label:"Ghost long",getLabel:n=>n.long,props:{variant:"ghost"}}],[{id:"iconLong",label:"Icon long",getLabel:n=>n.long,props:{variant:"solid",showIcon:!0}},{id:"loadingLong",label:"Loading long",getLabel:n=>n.long,props:{variant:"solid",state:"loading"}}]];return e.createElement("div",{style:{display:"grid",gap:44}},z.map(({locale:n,lang:u,fontFamily:a,samples:i})=>e.createElement("section",{key:n,lang:u,style:{fontFamily:a}},e.createElement("h3",{style:{color:"#0f172a",fontSize:16,margin:"0 0 16px"}},n),e.createElement("div",{style:{display:"grid",gap:28}},r.map((o,m)=>e.createElement("div",{key:`${n}-group-${m}`,style:{alignItems:"center",columnGap:44,display:"grid",gridTemplateColumns:`32px repeat(${o.length}, max-content)`,rowGap:18}},e.createElement("div",null),o.map(s=>e.createElement("div",{key:`${n}-${s.id}-header`,style:{color:"#64748b",fontSize:12,minWidth:128}},s.label)),l.map(s=>e.createElement(e.Fragment,{key:`${n}-${m}-${s}`},e.createElement("div",{style:{...f,padding:0}},s),o.map(v=>e.createElement("div",{key:`${n}-${s}-${v.id}`},e.createElement(t,{...v.props,size:s},v.getLabel(i))))))))))))}p.parameters={controls:{disable:!0},docs:{description:{story:"Global label-fit check for English, Korean, and Japanese labels across short/default/long copy, long variant styles, icon spacing, and loading dots."}}};g.__docgenInfo={description:"",methods:[],displayName:"Playground"};d.__docgenInfo={description:"",methods:[],displayName:"Overview"};c.__docgenInfo={description:"",methods:[],displayName:"Matrix"};p.__docgenInfo={description:"",methods:[],displayName:"Locales"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`function Playground(args) {
  return <Button {...args} />;
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`function Overview() {
  const states = [["enabled", "Enabled"], ["engaged", "Engaged"], ["loading", "Loading"], ["disabled", "Disabled"]];
  return <div style={{
    display: "grid",
    gap: 28
  }}>
      <section>
        <h3 style={{
        fontSize: 13,
        margin: "0 0 10px"
      }}>Variants</h3>
        <div style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }}>
          <Button variant="solid" size="m">Button</Button>
          <Button variant="outline" size="m">Button</Button>
          <Button variant="ghost" size="m">Button</Button>
        </div>
      </section>

      <section>
        <h3 style={{
        fontSize: 13,
        margin: "0 0 10px"
      }}>Sizes</h3>
        <div style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }}>
          <Button variant="solid" size="s">Button</Button>
          <Button variant="solid" size="m">Button</Button>
          <Button variant="solid" size="l">Button</Button>
        </div>
      </section>

      <section>
        <h3 style={{
        fontSize: 13,
        margin: "0 0 10px"
      }}>Mobile-first States</h3>
        <div style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }}>
          {states.map(([state, label]) => <div key={state} style={{
          display: "grid",
          gap: 6,
          justifyItems: "start"
        }}>
              <span style={{
            color: "#64748b",
            fontSize: 12
          }}>{label}</span>
              <Button variant="solid" size="m" state={state}>Button</Button>
            </div>)}
        </div>
      </section>

      <section>
        <h3 style={{
        fontSize: 13,
        margin: "0 0 10px"
      }}>Icon Options</h3>
        <div style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }}>
          <Button variant="solid" size="m" showIcon>With icon</Button>
          <Button variant="solid" size="m">Text only</Button>
          <Button variant="outline" size="m" showIcon>With icon</Button>
          <Button variant="solid" size="s" layout="iconOnly" ariaLabel="Arrow action" />
          <Button variant="solid" size="m" layout="iconOnly" ariaLabel="Arrow action" />
          <Button variant="solid" size="l" layout="iconOnly" ariaLabel="Arrow action" />
        </div>
      </section>

      <section>
        <h3 style={{
        fontSize: 13,
        margin: "0 0 10px"
      }}>Icon-only Tooltip Pairing</h3>
        <div style={{
        alignItems: "flex-end",
        display: "flex",
        flexWrap: "wrap",
        gap: 24
      }}>
          <Tooltip content="뒤로 가기">
            <Button variant="solid" size="m" layout="iconOnly" ariaLabel="뒤로 가기" />
          </Tooltip>
          <Tooltip content="뒤로 가기" position="bottom">
            <Button variant="outline" size="m" layout="iconOnly" ariaLabel="뒤로 가기" />
          </Tooltip>
        </div>
      </section>
    </div>;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`function Matrix() {
  const variants = ["solid", "outline", "ghost"];
  const sizes = ["s", "m", "l"];
  const states = ["enabled", "engaged", "loading", "disabled"];
  const layouts = [{
    id: "textOnly",
    label: "Text only",
    props: {
      layout: "withText",
      showIcon: false
    }
  }, {
    id: "withIcon",
    label: "With icon",
    props: {
      layout: "withText",
      showIcon: true
    }
  }, {
    id: "iconOnly",
    label: "Icon only",
    props: {
      layout: "iconOnly",
      showIcon: true,
      ariaLabel: "Arrow action"
    }
  }];
  return <div style={{
    display: "grid",
    gap: 36
  }}>
      {layouts.map(layout => <section key={layout.id}>
          <h3 style={{
        color: "#0f172a",
        fontSize: 16,
        margin: "0 0 12px"
      }}>{layout.label}</h3>
          <table style={storyTableStyle}>
            <tbody>
              {variants.map(variant => <React.Fragment key={\`\${layout.id}-\${variant}\`}>
                  <tr>
                    <th colSpan={5} style={{
                ...storyHeaderStyle,
                fontSize: 16,
                paddingTop: 18
              }}>{variant}</th>
                  </tr>
                  {sizes.map(size => <tr key={\`\${layout.id}-\${variant}-\${size}\`}>
                      <th style={storyHeaderStyle}>{size}</th>
                      {states.map(state => <td key={\`\${layout.id}-\${variant}-\${size}-\${state}\`} style={storyCellStyle}>
                          <Button {...layout.props} variant={variant} size={size} state={state}>
                            Button
                          </Button>
                        </td>)}
                    </tr>)}
                </React.Fragment>)}
            </tbody>
          </table>
        </section>)}
    </div>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function Locales() {
  const sizes = ["s", "m", "l"];
  const scenarioGroups = [[{
    id: "short",
    label: "Short",
    getLabel: samples => samples.short,
    props: {
      variant: "solid"
    }
  }, {
    id: "default",
    label: "Default",
    getLabel: samples => samples.default,
    props: {
      variant: "solid"
    }
  }, {
    id: "long",
    label: "Long",
    getLabel: samples => samples.long,
    props: {
      variant: "solid"
    }
  }], [{
    id: "solidLong",
    label: "Solid long",
    getLabel: samples => samples.long,
    props: {
      variant: "solid"
    }
  }, {
    id: "outlineLong",
    label: "Outline long",
    getLabel: samples => samples.long,
    props: {
      variant: "outline"
    }
  }, {
    id: "ghostLong",
    label: "Ghost long",
    getLabel: samples => samples.long,
    props: {
      variant: "ghost"
    }
  }], [{
    id: "iconLong",
    label: "Icon long",
    getLabel: samples => samples.long,
    props: {
      variant: "solid",
      showIcon: true
    }
  }, {
    id: "loadingLong",
    label: "Loading long",
    getLabel: samples => samples.long,
    props: {
      variant: "solid",
      state: "loading"
    }
  }]];
  return <div style={{
    display: "grid",
    gap: 44
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
        margin: "0 0 16px"
      }}>{locale}</h3>
          <div style={{
        display: "grid",
        gap: 28
      }}>
            {scenarioGroups.map((scenarios, groupIndex) => <div key={\`\${locale}-group-\${groupIndex}\`} style={{
          alignItems: "center",
          columnGap: 44,
          display: "grid",
          gridTemplateColumns: \`32px repeat(\${scenarios.length}, max-content)\`,
          rowGap: 18
        }}>
                <div />
                {scenarios.map(scenario => <div key={\`\${locale}-\${scenario.id}-header\`} style={{
            color: "#64748b",
            fontSize: 12,
            minWidth: 128
          }}>
                    {scenario.label}
                  </div>)}
                {sizes.map(size => <React.Fragment key={\`\${locale}-\${groupIndex}-\${size}\`}>
                    <div style={{
              ...storyHeaderStyle,
              padding: 0
            }}>{size}</div>
                    {scenarios.map(scenario => <div key={\`\${locale}-\${size}-\${scenario.id}\`}>
                        <Button {...scenario.props} size={size}>{scenario.getLabel(samples)}</Button>
                      </div>)}
                  </React.Fragment>)}
              </div>)}
          </div>
        </section>)}
    </div>;
}`,...p.parameters?.docs?.source}}};const S=["Playground","Overview","Matrix","Locales"];export{p as Locales,c as Matrix,d as Overview,g as Playground,S as __namedExportsOrder,L as default};
