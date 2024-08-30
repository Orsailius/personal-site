import{S as P,i as T,s as k,k as p,a as v,q as I,O as C,l as c,h as i,c as S,m as x,r as w,n as l,p as H,D as s,b as D,H as y}from"../chunks/index.d9fb27cb.js";import{g as O}from"../chunks/main.e5fc04ed.js";const j=!0,q=Object.freeze(Object.defineProperty({__proto__:null,prerender:j},Symbol.toStringTag,{value:"Module"}));function F(b){let t,f,e,a,E,u,r,g,h,d;return{c(){t=p("meta"),f=v(),e=p("div"),a=p("div"),E=I("Make a Web Card"),u=v(),r=p("div"),g=I("Using a Domain Specific Language"),h=v(),d=p("div"),this.h()},l(n){const m=C("svelte-haef5o",document.head);t=c(m,"META",{name:!0,content:!0}),m.forEach(i),f=S(n),e=c(n,"DIV",{class:!0,style:!0});var o=x(e);a=c(o,"DIV",{class:!0});var _=x(a);E=w(_,"Make a Web Card"),_.forEach(i),u=S(o),r=c(o,"DIV",{class:!0});var L=x(r);g=w(L,"Using a Domain Specific Language"),L.forEach(i),h=S(o),d=c(o,"DIV",{class:!0});var A=x(d);A.forEach(i),o.forEach(i),this.h()},h(){document.title="High Level Lanaguage",l(t,"name","description"),l(t,"content","About this app"),l(a,"class","text-4xl text-center font-semibold pt-8"),l(r,"class","text-sm text-center pb-8"),l(d,"class","flex"),l(e,"class","bg-base-100 h-full"),H(e,"min-height","92.25vh")},m(n,m){s(document.head,t),D(n,f,m),D(n,e,m),s(e,a),s(a,E),s(e,u),s(e,r),s(r,g),s(e,h),s(e,d)},p:y,i:y,o:y,d(n){i(t),n&&i(f),n&&i(e)}}}function K(b){return O(String.raw`
    Compila {

        Exp
        = Statement*
        
        Enum
        = "enum" ident ident ("," ident)* ";"
        
        
        Class
        ="class" ident Statement* ";"

        Totality
        = "totality" ident ("with" "id")* Statement* ";"
        
        Statement
            = Declaration ";" --declaration
        | "return" Expression ";" --return
        | "failif" Expression ";" --failif
        | "yield" Expression ";" --yield
        | Function ";" --function
        | Assignment  ";" --assignment      
        | IfStatement ";" --if
        | ForStatement ";"--for
        | Iterative ";" --iter     
        
        IfStatement
        = "if" "(" Expression ")" Statement* ElseIf* Else*

        ElseIf
        ="else" "if" "(" Expression ")" Statement*

        Else
        ="else" Statement*

        ForStatement
        = "for" "(" (Expression | Declaration) ")" Statement* --foreach
        | "for" "(" Expression ";" Expression ";" Expression ")" Statement* --fori
        | "for" "(" ident ("," ident)* "of" Expression ")" Statement* --forof

        Iterative
        = iterativeKeyword "(" Expression ")" (Statement* | Expression) --long
        | iterativeKeyword "(" ident "of" Expression ")" (Statement* | Expression)  -- explicit
        | iterativeKeyword "(" Expression "," Lambda ")" --lambda

        Lambda
        = "(" Params ")" "=>" Expression
        
        Expression
        = Expression infix Expression --infix
        | prefix Expression --prefix
        | ident "(" Expression ("," Expression)* ")" --functioncall
        | Expression "[" Expression "]" --index
        | "(" Expression ")" --brackets
        | Literal--literal
        | ident ("." Expression)* --callchain    

        | "new" ident "(" Expression* ")" --new  
        
        Declaration
        = ("required")* ("const" | "let")* "!"* ident "=" Expression
        
        Assignment
        = ident "=" Expression --normal
        | ident "~=" Expression --fail   
        | ident "?" Expression "=" Expression --assignif
        
        Function
        = ident "(" Params* ")" (":" Type)* Statement*

        Type
        = ident (("|" | "&") ident)*

        Params
        = Param "," Params --multi
        |  Param --single
        
        Param
        =  Type ident (RHSAssignment)*--typed
        | ident (RHSAssignment)*--typeless

        RHSAssignment
        = "=" Literal  

        Literal
        = string | number | ArrayLiteral | ObjectLiteral | boolean | "fail" | "null"
        
        ArrayLiteral
        = "[""]" --empty
        | "[" Expression ("," Expression)* "]" --normal

        ObjectLiteral
        = "{" "}" -- empty
        | "{" ident ":" Expression ("," ident ":" Expression)* "}" --normal

        ident  (an identifier)
        = letter alnum*
        
        infix
        ="+" | "-" | "*" | "/" | "<" | ">" | ">=" | "<=" | "=="

        prefix
        ="~" | "-"  
        
        knownType
            = "string" | "int" | "number" | "decimal" | "float" | "double" | "boolean" | "any"
        
        iterativeKeyword
        ="map" | "filter" | "find" | "sort" | "sortInto"
        
        string
            = "\"" (~"\"" any )+ "\""
        
        boolean
        ="true" | "false"

        number  (a number)
        = digit* "." digit+  -- fract
        | digit+             -- whole
        }
    `),[]}class R extends P{constructor(t){super(),T(this,t,K,F,k,{})}}export{R as component,q as universal};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuOTM0YTBlZGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvaGxsLytwYWdlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9obGwvK3BhZ2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRldiB9IGZyb20gJyRhcHAvZW52aXJvbm1lbnQnO1xyXG5cclxuLy8gc2luY2UgdGhlcmUncyBubyBkeW5hbWljIGRhdGEgaGVyZSwgd2UgY2FuIHByZXJlbmRlclxyXG4vLyBpdCBzbyB0aGF0IGl0IGdldHMgc2VydmVkIGFzIGEgc3RhdGljIGFzc2V0IGluIHByb2R1Y3Rpb25cclxuZXhwb3J0IGNvbnN0IHByZXJlbmRlciA9IHRydWU7IiwiPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuICAgIGltcG9ydCBNYWRlQ2FyZCBmcm9tICckbGliL2NvbXBvbmVudHMvTWFkZUNhcmQuc3ZlbHRlJztcclxuaW1wb3J0IE1hZGVDYXJkRGF0YSwgeyBDb250ZW50VHlwZSB9IGZyb20gJyRsaWIvZGF0YXR5cGVzL01hZGVDYXJkRGF0YSc7XHJcbiAgICBpbXBvcnQgKiBhcyBvaG0gZnJvbSAnb2htLWpzJztcclxuXHJcbiAgICBpbnRlcmZhY2UgRHVtbXlTdHJ1Y3RcclxuICAgIHtcclxuICAgICAgICBhZ2U6bnVtYmVyO1xyXG4gICAgICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgICAgIHJlZjphbnk7XHJcbiAgICAgICAgY2hlY2tlZDpib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3YXkxOkR1bW15U3RydWN0W10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBteUdyYW1tYXIgPSBvaG0uZ3JhbW1hcihTdHJpbmcucmF3YFxyXG4gICAgQ29tcGlsYSB7XHJcblxyXG4gICAgICAgIEV4cFxyXG4gICAgICAgID0gU3RhdGVtZW50KlxyXG4gICAgICAgIFxyXG4gICAgICAgIEVudW1cclxuICAgICAgICA9IFwiZW51bVwiIGlkZW50IGlkZW50IChcIixcIiBpZGVudCkqIFwiO1wiXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2xhc3NcclxuICAgICAgICA9XCJjbGFzc1wiIGlkZW50IFN0YXRlbWVudCogXCI7XCJcclxuXHJcbiAgICAgICAgVG90YWxpdHlcclxuICAgICAgICA9IFwidG90YWxpdHlcIiBpZGVudCAoXCJ3aXRoXCIgXCJpZFwiKSogU3RhdGVtZW50KiBcIjtcIlxyXG4gICAgICAgIFxyXG4gICAgICAgIFN0YXRlbWVudFxyXG4gICAgICAgICAgICA9IERlY2xhcmF0aW9uIFwiO1wiIC0tZGVjbGFyYXRpb25cclxuICAgICAgICB8IFwicmV0dXJuXCIgRXhwcmVzc2lvbiBcIjtcIiAtLXJldHVyblxyXG4gICAgICAgIHwgXCJmYWlsaWZcIiBFeHByZXNzaW9uIFwiO1wiIC0tZmFpbGlmXHJcbiAgICAgICAgfCBcInlpZWxkXCIgRXhwcmVzc2lvbiBcIjtcIiAtLXlpZWxkXHJcbiAgICAgICAgfCBGdW5jdGlvbiBcIjtcIiAtLWZ1bmN0aW9uXHJcbiAgICAgICAgfCBBc3NpZ25tZW50ICBcIjtcIiAtLWFzc2lnbm1lbnQgICAgICBcclxuICAgICAgICB8IElmU3RhdGVtZW50IFwiO1wiIC0taWZcclxuICAgICAgICB8IEZvclN0YXRlbWVudCBcIjtcIi0tZm9yXHJcbiAgICAgICAgfCBJdGVyYXRpdmUgXCI7XCIgLS1pdGVyICAgICBcclxuICAgICAgICBcclxuICAgICAgICBJZlN0YXRlbWVudFxyXG4gICAgICAgID0gXCJpZlwiIFwiKFwiIEV4cHJlc3Npb24gXCIpXCIgU3RhdGVtZW50KiBFbHNlSWYqIEVsc2UqXHJcblxyXG4gICAgICAgIEVsc2VJZlxyXG4gICAgICAgID1cImVsc2VcIiBcImlmXCIgXCIoXCIgRXhwcmVzc2lvbiBcIilcIiBTdGF0ZW1lbnQqXHJcblxyXG4gICAgICAgIEVsc2VcclxuICAgICAgICA9XCJlbHNlXCIgU3RhdGVtZW50KlxyXG5cclxuICAgICAgICBGb3JTdGF0ZW1lbnRcclxuICAgICAgICA9IFwiZm9yXCIgXCIoXCIgKEV4cHJlc3Npb24gfCBEZWNsYXJhdGlvbikgXCIpXCIgU3RhdGVtZW50KiAtLWZvcmVhY2hcclxuICAgICAgICB8IFwiZm9yXCIgXCIoXCIgRXhwcmVzc2lvbiBcIjtcIiBFeHByZXNzaW9uIFwiO1wiIEV4cHJlc3Npb24gXCIpXCIgU3RhdGVtZW50KiAtLWZvcmlcclxuICAgICAgICB8IFwiZm9yXCIgXCIoXCIgaWRlbnQgKFwiLFwiIGlkZW50KSogXCJvZlwiIEV4cHJlc3Npb24gXCIpXCIgU3RhdGVtZW50KiAtLWZvcm9mXHJcblxyXG4gICAgICAgIEl0ZXJhdGl2ZVxyXG4gICAgICAgID0gaXRlcmF0aXZlS2V5d29yZCBcIihcIiBFeHByZXNzaW9uIFwiKVwiIChTdGF0ZW1lbnQqIHwgRXhwcmVzc2lvbikgLS1sb25nXHJcbiAgICAgICAgfCBpdGVyYXRpdmVLZXl3b3JkIFwiKFwiIGlkZW50IFwib2ZcIiBFeHByZXNzaW9uIFwiKVwiIChTdGF0ZW1lbnQqIHwgRXhwcmVzc2lvbikgIC0tIGV4cGxpY2l0XHJcbiAgICAgICAgfCBpdGVyYXRpdmVLZXl3b3JkIFwiKFwiIEV4cHJlc3Npb24gXCIsXCIgTGFtYmRhIFwiKVwiIC0tbGFtYmRhXHJcblxyXG4gICAgICAgIExhbWJkYVxyXG4gICAgICAgID0gXCIoXCIgUGFyYW1zIFwiKVwiIFwiPT5cIiBFeHByZXNzaW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgRXhwcmVzc2lvblxyXG4gICAgICAgID0gRXhwcmVzc2lvbiBpbmZpeCBFeHByZXNzaW9uIC0taW5maXhcclxuICAgICAgICB8IHByZWZpeCBFeHByZXNzaW9uIC0tcHJlZml4XHJcbiAgICAgICAgfCBpZGVudCBcIihcIiBFeHByZXNzaW9uIChcIixcIiBFeHByZXNzaW9uKSogXCIpXCIgLS1mdW5jdGlvbmNhbGxcclxuICAgICAgICB8IEV4cHJlc3Npb24gXCJbXCIgRXhwcmVzc2lvbiBcIl1cIiAtLWluZGV4XHJcbiAgICAgICAgfCBcIihcIiBFeHByZXNzaW9uIFwiKVwiIC0tYnJhY2tldHNcclxuICAgICAgICB8IExpdGVyYWwtLWxpdGVyYWxcclxuICAgICAgICB8IGlkZW50IChcIi5cIiBFeHByZXNzaW9uKSogLS1jYWxsY2hhaW4gICAgXHJcblxyXG4gICAgICAgIHwgXCJuZXdcIiBpZGVudCBcIihcIiBFeHByZXNzaW9uKiBcIilcIiAtLW5ldyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgRGVjbGFyYXRpb25cclxuICAgICAgICA9IChcInJlcXVpcmVkXCIpKiAoXCJjb25zdFwiIHwgXCJsZXRcIikqIFwiIVwiKiBpZGVudCBcIj1cIiBFeHByZXNzaW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgQXNzaWdubWVudFxyXG4gICAgICAgID0gaWRlbnQgXCI9XCIgRXhwcmVzc2lvbiAtLW5vcm1hbFxyXG4gICAgICAgIHwgaWRlbnQgXCJ+PVwiIEV4cHJlc3Npb24gLS1mYWlsICAgXHJcbiAgICAgICAgfCBpZGVudCBcIj9cIiBFeHByZXNzaW9uIFwiPVwiIEV4cHJlc3Npb24gLS1hc3NpZ25pZlxyXG4gICAgICAgIFxyXG4gICAgICAgIEZ1bmN0aW9uXHJcbiAgICAgICAgPSBpZGVudCBcIihcIiBQYXJhbXMqIFwiKVwiIChcIjpcIiBUeXBlKSogU3RhdGVtZW50KlxyXG5cclxuICAgICAgICBUeXBlXHJcbiAgICAgICAgPSBpZGVudCAoKFwifFwiIHwgXCImXCIpIGlkZW50KSpcclxuXHJcbiAgICAgICAgUGFyYW1zXHJcbiAgICAgICAgPSBQYXJhbSBcIixcIiBQYXJhbXMgLS1tdWx0aVxyXG4gICAgICAgIHwgIFBhcmFtIC0tc2luZ2xlXHJcbiAgICAgICAgXHJcbiAgICAgICAgUGFyYW1cclxuICAgICAgICA9ICBUeXBlIGlkZW50IChSSFNBc3NpZ25tZW50KSotLXR5cGVkXHJcbiAgICAgICAgfCBpZGVudCAoUkhTQXNzaWdubWVudCkqLS10eXBlbGVzc1xyXG5cclxuICAgICAgICBSSFNBc3NpZ25tZW50XHJcbiAgICAgICAgPSBcIj1cIiBMaXRlcmFsICBcclxuXHJcbiAgICAgICAgTGl0ZXJhbFxyXG4gICAgICAgID0gc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXlMaXRlcmFsIHwgT2JqZWN0TGl0ZXJhbCB8IGJvb2xlYW4gfCBcImZhaWxcIiB8IFwibnVsbFwiXHJcbiAgICAgICAgXHJcbiAgICAgICAgQXJyYXlMaXRlcmFsXHJcbiAgICAgICAgPSBcIltcIlwiXVwiIC0tZW1wdHlcclxuICAgICAgICB8IFwiW1wiIEV4cHJlc3Npb24gKFwiLFwiIEV4cHJlc3Npb24pKiBcIl1cIiAtLW5vcm1hbFxyXG5cclxuICAgICAgICBPYmplY3RMaXRlcmFsXHJcbiAgICAgICAgPSBcIntcIiBcIn1cIiAtLSBlbXB0eVxyXG4gICAgICAgIHwgXCJ7XCIgaWRlbnQgXCI6XCIgRXhwcmVzc2lvbiAoXCIsXCIgaWRlbnQgXCI6XCIgRXhwcmVzc2lvbikqIFwifVwiIC0tbm9ybWFsXHJcblxyXG4gICAgICAgIGlkZW50ICAoYW4gaWRlbnRpZmllcilcclxuICAgICAgICA9IGxldHRlciBhbG51bSpcclxuICAgICAgICBcclxuICAgICAgICBpbmZpeFxyXG4gICAgICAgID1cIitcIiB8IFwiLVwiIHwgXCIqXCIgfCBcIi9cIiB8IFwiPFwiIHwgXCI+XCIgfCBcIj49XCIgfCBcIjw9XCIgfCBcIj09XCJcclxuXHJcbiAgICAgICAgcHJlZml4XHJcbiAgICAgICAgPVwiflwiIHwgXCItXCIgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGtub3duVHlwZVxyXG4gICAgICAgICAgICA9IFwic3RyaW5nXCIgfCBcImludFwiIHwgXCJudW1iZXJcIiB8IFwiZGVjaW1hbFwiIHwgXCJmbG9hdFwiIHwgXCJkb3VibGVcIiB8IFwiYm9vbGVhblwiIHwgXCJhbnlcIlxyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZXJhdGl2ZUtleXdvcmRcclxuICAgICAgICA9XCJtYXBcIiB8IFwiZmlsdGVyXCIgfCBcImZpbmRcIiB8IFwic29ydFwiIHwgXCJzb3J0SW50b1wiXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RyaW5nXHJcbiAgICAgICAgICAgID0gXCJcXFwiXCIgKH5cIlxcXCJcIiBhbnkgKSsgXCJcXFwiXCJcclxuICAgICAgICBcclxuICAgICAgICBib29sZWFuXHJcbiAgICAgICAgPVwidHJ1ZVwiIHwgXCJmYWxzZVwiXHJcblxyXG4gICAgICAgIG51bWJlciAgKGEgbnVtYmVyKVxyXG4gICAgICAgID0gZGlnaXQqIFwiLlwiIGRpZ2l0KyAgLS0gZnJhY3RcclxuICAgICAgICB8IGRpZ2l0KyAgICAgICAgICAgICAtLSB3aG9sZVxyXG4gICAgICAgIH1cclxuICAgIGApO1xyXG5cclxuICAgLyogY29uc3QgZXhhbXBsZXM6c3RyaW5nW10gPSBbXHJcbiAgICAgICAgYGNvbnN0IG1pZCA9IChsb3cgKyBoaWdoKSAvIDI7XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG5cclxuIFxyXG4gICAgbGV0IGNhcmREYXRhOk1hZGVDYXJkRGF0YSA9IG5ldyBNYWRlQ2FyZERhdGEoKTtcclxuXHJcbiAgICBjb25zdCBzZW1hbnRpY3MgPSBteUdyYW1tYXIuY3JlYXRlU2VtYW50aWNzKCk7XHJcbiAgICBzZW1hbnRpY3MuYWRkT3BlcmF0aW9uKCdldmFsJyxcclxuICAgIHtcclxuICAgICAgICBfaXRlciguLi5jaGlsZHJlbikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZHJlbi5tYXAoeD0+eC5ldmFsSW5uZXIoKSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlbWFudGljcy5hZGRPcGVyYXRpb24oJ2V2YWxJbm5lcicsXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY29kZTpzdHJpbmcgPSBleGFtcGxlc1swXTtcclxuICAgIGxldCBtYXRjaFJlc3VsdDpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkKClcclxuICAgIHtcclxuICAgICAgICBtYXRjaFJlc3VsdCA9IFwiQnVpbGRpbmcuLi5cIjsgICAgICAgIFxyXG4gICAgICAgIGNhcmREYXRhID0gbmV3IE1hZGVDYXJkRGF0YSgpO1xyXG4gICAgICAgIGlmKGNvZGUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF0Y2ggPSBteUdyYW1tYXIubWF0Y2goY29kZSk7XHJcbiAgICAgICAgaWYobWF0Y2guc3VjY2VlZGVkKCkpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXRjaFJlc3VsdCA9IFwiU3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICBzZW1hbnRpY3MobWF0Y2gpLmV2YWwoKTsgICAgIFxyXG4gICAgICAgICAgICBjYXJkRGF0YS5wdXNoV29ya2luZygpO1xyXG4gICAgICAgICAgICBjYXJkRGF0YS5hcHBseVN0eWxlR3JvdXBzKCk7XHJcbiAgICAgICAgICAgIGNhcmREYXRhID0gY2FyZERhdGE7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXRjaFJlc3VsdCA9IFwiRmFpbHVyZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgdHlwaW5nVGltZXI6YW55O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdhaXRCdWlsZCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHR5cGluZ1RpbWVyKTtcclxuICAgICAgICB0eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoYnVpbGQsIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCk7Ki9cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT5IaWdoIExldmVsIExhbmFndWFnZTwvdGl0bGU+XHJcblx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFib3V0IHRoaXMgYXBwXCIgLz5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxkaXYgY2xhc3M9XCJiZy1iYXNlLTEwMCBoLWZ1bGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6OTIuMjV2aFwiPiAgIFxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgcHQtOFwiPlxyXG4gICAgICAgIE1ha2UgYSBXZWIgQ2FyZFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbSB0ZXh0LWNlbnRlciBwYi04XCI+XHJcbiAgICAgICAgVXNpbmcgYSBEb21haW4gU3BlY2lmaWMgTGFuZ3VhZ2VcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXhcIj4gICAgICBcclxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctMS8yIGJnLWJsdWUtMTAwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBwLThcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwidGV4dGFyZWEgdGV4dGFyZWEtcHJpbWFyeSB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNXJlbTsgbWF4LWhlaWdodDogMTAwcmVtO1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJpb1wiIFxyXG4gICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgICAgIG9uOmlucHV0PXt3YWl0QnVpbGR9Lz5cclxuICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb246Y2xpY2s9e2J1aWxkfT5cclxuICAgICAgICAgICAgICAgIFJlZnJlc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWF0Y2hSZXN1bHR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LTEvMiBiZy15ZWxsb3ctMTAwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0yLzMgYmctd2hpdGUgcm91bmRlZC14bCBvdXRsaW5lIG91dGxpbmUtNCBvdXRsaW5lLWdyYXktMjAwIHAtNCBtLTQgcHQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxNYWRlQ2FyZCBtYWRlQ2FyZERhdGE9e2NhcmREYXRhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4tLT5cclxuICAgIDwvZGl2Plx0XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsicHJlcmVuZGVyIiwiYXBwZW5kX2h5ZHJhdGlvbiIsIm1ldGEiLCJpbnNlcnRfaHlkcmF0aW9uIiwidGFyZ2V0IiwiZGl2MyIsImFuY2hvciIsImRpdjAiLCJkaXYxIiwiZGl2MiIsIm9obS5ncmFtbWFyIl0sIm1hcHBpbmdzIjoiK01BSU8sTUFBTUEsRUFBWSx5TUN1TWdDLGlCQUVyRCx1QkFDc0Msa0NBRXRDLHVOQUxxRCxpQkFFckQsK0RBQ3NDLGtDQUV0QywwWEFUSEMsRUFBb0QsU0FBQSxLQUFBQyxDQUFBLFdBR3JEQyxFQTJCTUMsRUFBQUMsRUFBQUMsQ0FBQSxFQTFCRkwsRUFFTUksRUFBQUUsQ0FBQSxnQkFDTk4sRUFFTUksRUFBQUcsQ0FBQSxnQkFDTlAsRUFtQk1JLEVBQUFJLENBQUEseURBck5ZQyxPQUFBQSxFQUFZLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSJ9
