"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{5002:function(e,t,n){n.d(t,{ET:function(){return s7},JU:function(){return sS},PL:function(){return s5},ad:function(){return sk},hJ:function(){return sC},r7:function(){return s6}});var r,s,i,a,o=n(9279),l=n(2680),u=n(9053),h=n(3943),c=n(6552),d=n(4575);n(357);var f=n(6300).Buffer;let m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="10.12.5",y=new u.Yd("@firebase/firestore");function w(){return y.logLevel}function v(e,...t){if(y.logLevel<=u.in.DEBUG){let n=t.map(T);y.debug(`Firestore (${p}): ${e}`,...n)}}function _(e,...t){if(y.logLevel<=u.in.ERROR){let n=t.map(T);y.error(`Firestore (${p}): ${e}`,...n)}}function E(e,...t){if(y.logLevel<=u.in.WARN){let n=t.map(T);y.warn(`Firestore (${p}): ${e}`,...n)}}function T(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw _(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED))}shutdown(){}}class b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),s=new A;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new A,e.enqueueRetryable(()=>r(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new A)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||I(),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||I(),new g(e)}}class x{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=g.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class R{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new x(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,v("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||I(),this.R=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new P(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new P(0,0))}static max(){return new U(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&I(),void 0===n?n=e.length-t:n>e.length-t&&I(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),s=t.get(r);if(n<s)return -1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends q{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}let z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends q{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,s=()=>{if(0===n.length)throw new S(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},i=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?i=!i:"."!==t||i?n+=t:s(),r++}if(s(),i)throw new S(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(B.fromString(e))}static fromName(e){return new K(B.fromString(e).popFirst(5))}static empty(){return new K(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new B(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Q.UNKNOWN_ID=-1;class G{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new G(U.min(),K.empty(),-1)}static max(){return new G(U.max(),K.empty(),-1)}}class j{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){if(e.code!==C.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof W?t:W.resolve(t)}catch(e){return W.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,n)=>{t(e)})}static reject(e){return new W((t,n)=>{n(e)})}static waitFor(e){return new W((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=W.resolve(!1);for(let n of e)t=t.next(e=>e?W.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new W((n,r)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new W((n,r)=>{let s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function Y(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function J(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ee(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function et(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}X.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.comparator=e,this.root=t||es.EMPTY}insert(e,t){return new en(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,es.BLACK,null,null))}remove(e){return new en(this.comparator,this.root.remove(e,this.comparator).copy(null,null,es.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new er(this.root,e,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new er(this.root,e,this.comparator,!0)}}class er{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class es{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:es.RED,this.left=null!=r?r:es.EMPTY,this.right=null!=s?s:es.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new es(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,s=n(e,r.key);return(r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return es.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return es.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,es.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,es.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();let e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}es.EMPTY=null,es.RED=!0,es.BLACK=!1,es.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,r,s){return this}insert(e,t,n){return new es(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.comparator=e,this.data=new en(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ea(this.data.getIterator())}getIteratorFrom(e){return new ea(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ei(this.comparator);return t.data=e,t}}class ea{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new eo([])}unionWith(e){let t=new ei($.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eo(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.binaryString=e}static fromBase64String(e){return new eu(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new el("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eu(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eu.EMPTY_BYTE_STRING=new eu("");let eh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ec(e){if(e||I(),"string"==typeof e){let t=0,n=eh.exec(e);if(n||I(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ed(e.seconds),nanos:ed(e.nanos)}}function ed(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ef(e){return"string"==typeof e?eu.fromBase64String(e):eu.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eg(e){let t=e.mapValue.fields.__previous_value__;return em(t)?eg(t):t}function ep(e){let t=ec(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,n,r,s,i,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ew{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ew("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ew&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function e_(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?em(e)?4:eR(e)?9007199254740991:10:I()}function eE(e,t){if(e===t)return!0;let n=e_(e);if(n!==e_(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ep(e).isEqual(ep(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ec(e.timestampValue),r=ec(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ef(e.bytesValue).isEqual(ef(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ed(e.geoPointValue.latitude)===ed(t.geoPointValue.latitude)&&ed(e.geoPointValue.longitude)===ed(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ed(e.integerValue)===ed(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ed(e.doubleValue),r=ed(t.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],eE);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Z(n)!==Z(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eE(n[e],r[e])))return!1;return!0}(e,t);default:return I()}}function eT(e,t){return void 0!==(e.values||[]).find(e=>eE(e,t))}function eI(e,t){if(e===t)return 0;let n=e_(e),r=e_(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ed(e.integerValue||e.doubleValue),r=ed(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eC(e.timestampValue,t.timestampValue);case 4:return eC(ep(e),ep(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){let n=ef(e),r=ef(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=F(n[e],r[e]);if(0!==t)return t}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=F(ed(e.latitude),ed(t.latitude));return 0!==n?n:F(ed(e.longitude),ed(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eI(n[e],r[e]);if(t)return t}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ev.mapValue&&t===ev.mapValue)return 0;if(e===ev.mapValue)return 1;if(t===ev.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){let t=F(r[e],i[e]);if(0!==t)return t;let a=eI(n[r[e]],s[i[e]]);if(0!==a)return a}return F(r.length,i.length)}(e.mapValue,t.mapValue);default:throw I()}}function eC(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);let n=ec(e),r=ec(t),s=F(n.seconds,r.seconds);return 0!==s?s:F(n.nanos,r.nanos)}function eS(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ec(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ef(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,K.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eS(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let s of t)r?r=!1:n+=",",n+=`${s}:${eS(e.fields[s])}`;return n+"}"}(e.mapValue):I()}function eA(e){return!!e&&"integerValue"in e}function eN(e){return!!e&&"arrayValue"in e}function ek(e){return!!e&&"nullValue"in e}function eb(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eD(e){return!!e&&"mapValue"in e}function ex(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ee(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ex(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ex(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eR(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.value=e}static empty(){return new eL({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eD(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ex(t)}setAll(e){let t=$.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=ex(e):r.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){let t=this.field(e.popLast());eD(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eE(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eD(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ee(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eL(ex(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t,n,r,s,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new eV(e,0,U.min(),U.min(),U.min(),eL.empty(),0)}static newFoundDocument(e,t,n,r){return new eV(e,1,t,U.min(),n,r,0)}static newNoDocument(e,t){return new eV(e,2,t,U.min(),U.min(),eL.empty(),0)}static newUnknownDocument(e,t){return new eV(e,3,t,U.min(),U.min(),eL.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(U.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eL.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eL.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eV&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eV(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t){this.position=e,this.inclusive=t}}function eF(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(r=i.field.isKeyField()?K.comparator(K.fromName(a.referenceValue),n.key):eI(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function eM(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eE(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{}class eq extends eU{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eK(e,t,n):"array-contains"===t?new eH(e,n):"in"===t?new eW(e,n):"not-in"===t?new eY(e,n):"array-contains-any"===t?new eX(e,n):new eq(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eQ(e,n):new eG(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eI(t,this.value)):null!==t&&e_(this.value)===e_(t)&&this.matchesComparison(eI(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class eB extends eU{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new eB(e,t)}matches(e){return ez(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ez(e){return"and"===e.op}function e$(e){for(let t of e.filters)if(t instanceof eB)return!1;return!0}class eK extends eq{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue)}matches(e){let t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class eQ extends eq{constructor(e,t){super(e,"in",t),this.keys=ej("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eG extends eq{constructor(e,t){super(e,"not-in",t),this.keys=ej("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ej(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>K.fromName(e.referenceValue))}class eH extends eq{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eN(t)&&eT(t.arrayValue,this.value)}}class eW extends eq{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eT(this.value.arrayValue,t)}}class eY extends eq{constructor(e,t){super(e,"not-in",t)}matches(e){if(eT(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eT(this.value.arrayValue,t)}}class eX extends eq{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eN(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eT(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t=null,n=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this.ue=null}}function eZ(e,t=null,n=[],r=[],s=null,i=null,a=null){return new eJ(e,t,n,r,s,i,a)}function e0(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eq)return t.field.canonicalString()+t.op.toString()+eS(t.value);if(e$(t)&&ez(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eS(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eS(e)).join(",")),e.ue=t}return e.ue}function e1(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var n,r;if(n=e.orderBy[s],r=t.orderBy[s],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eq?n instanceof eq&&t.op===n.op&&t.field.isEqual(n.field)&&eE(t.value,n.value):t instanceof eB?n instanceof eB&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,s)=>t&&e(r,n.filters[s]),!0):void I()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eM(e.startAt,t.startAt)&&eM(e.endAt,t.endAt)}function e2(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,t=null,n=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e3(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e9(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ei($.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eP(t,r))}),n.has($.keyField().canonicalString())||e.ce.push(new eP($.keyField(),r))}return e.ce}function e8(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return eZ(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eP(e.field,t)});let n=e.endAt?new eO(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eO(e.startAt.position,e.startAt.inclusive):null;return eZ(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,e9(e))),e.le}function e5(e,t,n){return new e4(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e6(e,t){return e1(e8(e),e8(t))&&e.limitType===t.limitType}function e7(e){return`${e0(e8(e))}|lt:${e.limitType}`}function te(e){var t;let n;return`Query(target=${n=(t=e8(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eq?`${t.field.canonicalString()} ${t.op} ${eS(t.value)}`:t instanceof eB?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eS(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eS(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tt(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):K.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e9(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eF(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e9(e),t))&&(!e.endAt||!!function(e,t,n){let r=eF(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e9(e),t))}function tn(e){return(t,n)=>{let r=!1;for(let s of e9(e)){let e=function(e,t,n){let r=e.field.isKeyField()?K.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?eI(r,s):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return I()}}(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ee(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts=new en(K.comparator),ti=new en(K.comparator);function ta(...e){let t=ti;for(let n of e)t=t.insert(n.key,n);return t}function to(e){let t=ti;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tl(){return new tr(e=>e.toString(),(e,t)=>e.isEqual(t))}let tu=new en(K.comparator),th=new ei(K.comparator);function tc(...e){let t=th;for(let n of e)t=t.add(n);return t}let td=new ei(F);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}function tm(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this._=void 0}}function tp(e,t){return e instanceof tT?eA(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ty extends tg{}class tw extends tg{constructor(e){super(),this.elements=e}}function tv(e,t){let n=tC(t);for(let t of e.elements)n.some(e=>eE(e,t))||n.push(t);return{arrayValue:{values:n}}}class t_ extends tg{constructor(e){super(),this.elements=e}}function tE(e,t){let n=tC(t);for(let t of e.elements)n=n.filter(e=>!eE(e,t));return{arrayValue:{values:n}}}class tT extends tg{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tI(e){return ed(e.integerValue||e.doubleValue)}function tC(e){return eN(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tS{constructor(e,t){this.version=e,this.transformResults=t}}class tA{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tA}static exists(e){return new tA(void 0,e)}static updateTime(e){return new tA(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tN(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tk{}function tb(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tM(e.key,tA.none()):new tR(e.key,e.data,tA.none());{let n=e.data,r=eL.empty(),s=new ei($.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new tL(e.key,r,new eo(s.toArray()),tA.none())}}function tD(e,t,n,r){return e instanceof tR?function(e,t,n,r){if(!tN(e.precondition,t))return n;let s=e.value.clone(),i=tF(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof tL?function(e,t,n,r){if(!tN(e.precondition,t))return n;let s=tF(e.fieldTransforms,r,t),i=t.data;return(i.setAll(tV(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tN(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tx(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&M(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tw&&r instanceof tw||n instanceof t_&&r instanceof t_?M(n.elements,r.elements,eE):n instanceof tT&&r instanceof tT?eE(n.Pe,r.Pe):n instanceof ty&&r instanceof ty)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tR extends tk{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tL extends tk{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tV(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tO(e,t,n){var r;let s=new Map;e.length===n.length||I();for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(r=n[i],o instanceof tw?tv(o,l):o instanceof t_?tE(o,l):r))}return s}function tF(e,t,n){let r=new Map;for(let s of e){let e=s.transform,i=n.data.field(s.field);r.set(s.field,e instanceof ty?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&em(t)&&(t=eg(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,i):e instanceof tw?tv(e,i):e instanceof t_?tE(e,i):function(e,t){let n=tp(e,t),r=tI(n)+tI(e.Pe);return eA(n)&&eA(e.Pe)?tm(r):tf(e.serializer,r)}(e,i))}return r}class tM extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tP extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var r;r=n[t],s instanceof tR?function(e,t,n){let r=e.value.clone(),s=tO(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(s,e,r):s instanceof tL?function(e,t,n){if(!tN(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tO(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(tV(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(s,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tD(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tD(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tl();return this.mutations.forEach(r=>{let s=e.get(r.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields),o=tb(i,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tc())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>tx(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>tx(e,t))}}class tq{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||I();let r=tu,s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new tq(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t){this.count=e,this.unchangedNames=t}}function t$(e){if(void 0===e)return _("GRPC error has no .code"),C.UNKNOWN;switch(e){case r.OK:return C.OK;case r.CANCELLED:return C.CANCELLED;case r.UNKNOWN:return C.UNKNOWN;case r.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case r.INTERNAL:return C.INTERNAL;case r.UNAVAILABLE:return C.UNAVAILABLE;case r.UNAUTHENTICATED:return C.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case r.NOT_FOUND:return C.NOT_FOUND;case r.ALREADY_EXISTS:return C.ALREADY_EXISTS;case r.PERMISSION_DENIED:return C.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case r.ABORTED:return C.ABORTED;case r.OUT_OF_RANGE:return C.OUT_OF_RANGE;case r.UNIMPLEMENTED:return C.UNIMPLEMENTED;case r.DATA_LOSS:return C.DATA_LOSS;default:return I()}}(s=r||(r={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tK=new c.z8([4294967295,4294967295],0);function tQ(e){let t=(new TextEncoder).encode(e),n=new c.V8;return n.update(t),new Uint8Array(n.digest())}function tG(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new c.z8([n,r],0),new c.z8([s,i],0)]}class tj{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tH(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new tH(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tH(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=c.z8.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(c.z8.fromNumber(n)));return 1===r.compare(tK)&&(r=new c.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let[t,n]=tG(tQ(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);if(!this.de(r))return!1}return!0}static create(e,t,n){let r=new tj(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ie)return;let[t,n]=tG(tQ(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);this.Ae(r)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tH extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tY.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tW(U.min(),r,new en(F),ts,tc())}}class tY{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tY(n,t,tc(),tc(),tc())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class tJ{constructor(e,t){this.targetId=e,this.me=t}}class tZ{constructor(e,t,n=eu.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class t0{constructor(){this.fe=0,this.ge=t4(),this.pe=eu.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=tc(),t=tc(),n=tc();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:I()}}),new tY(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=t4()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||I()}Ne(){this.we=!0,this.ye=!0}}class t1{constructor(e){this.Le=e,this.Be=new Map,this.ke=ts,this.qe=t2(),this.Qe=new en(F)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:I()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){let t=e.targetId,n=e.me.count,r=this.Je(t);if(r){let s=r.target;if(e2(s)){if(0===n){let e=new K(s.path);this.Ue(t,e,eV.newNoDocument(e,U.min()))}else 1===n||I()}else{let r=this.Ye(t);if(r!==n){let n=this.Ze(e),s=n?this.Xe(n,e,r):1;0!==s&&(this.je(t),this.Qe=this.Qe.insert(t,2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:s="",padding:i=0},hashCount:a=0}=r;try{t=ef(s).toUint8Array()}catch(e){if(e instanceof el)return E("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new tj(t,i,a)}catch(e){return E(e instanceof tH?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ie?null:n}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let s=this.Le.tt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,n,null),r++)}),r}rt(e){let t=new Map;this.Be.forEach((n,r)=>{let s=this.Je(r);if(s){if(n.current&&e2(s.target)){let t=new K(s.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,eV.newNoDocument(t,e))}n.be&&(t.set(r,n.Ce()),n.ve())}});let n=tc();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new tW(e,t,this.Qe,this.ke,n);return this.ke=ts,this.qe=t2(),this.Qe=new en(F),r}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;let r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new t0,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ei(F),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||v("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new t0),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function t2(){return new en(K.comparator)}function t4(){return new en(K.comparator)}let t3={asc:"ASCENDING",desc:"DESCENDING"},t9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t8={and:"AND",or:"OR"};class t5{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t6(e,t){return e.useProto3Json||null==t?t:{value:t}}function t7(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ne(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nt(e){return e||I(),U.fromTimestamp(function(e){let t=ec(e);return new P(t.seconds,t.nanos)}(e))}function nn(e,t){return nr(e,t).canonicalString()}function nr(e,t){let n=new B(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function ns(e){let t=B.fromString(e);return nf(t)||I(),t}function ni(e,t){return nn(e.databaseId,t.path)}function na(e,t){let n=ns(t);if(n.get(1)!==e.databaseId.projectId)throw new S(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K(nu(n))}function no(e,t){return nn(e.databaseId,t)}function nl(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nu(e){return e.length>4&&"documents"===e.get(4)||I(),e.popFirst(5)}function nh(e,t,n){return{name:ni(e,t),fields:n.value.mapValue.fields}}function nc(e){return{fieldPath:e.canonicalString()}}function nd(e){return $.fromServerFormat(e.fieldPath)}function nf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,n,r,s=U.min(),i=U.min(),a=eu.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nm(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nm(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ed(e.integerValue));else if("doubleValue"in e){let n=ed(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),J(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=ec(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(ef(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?eR(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):I()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){let n=e.fields||{};for(let e of(this.dt(t,55),Object.keys(n)))this.Vt(e,t),this.Tt(n[e],t)}St(e,t){let n=e.values||[];for(let e of(this.dt(t,50),n))this.Tt(e,t)}yt(e,t){this.dt(t,37),K.fromName(e).path.forEach(e=>{this.dt(t,60),this.bt(e,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}np.Dt=new np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.an=new nw}addToCollectionParentIndex(e,t){return this.an.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(G.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(G.min())}updateCollectionGroup(e,t,n){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class nw{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ei(B.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ei(B.comparator)).toArray()}}new Uint8Array(0);class nv{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nv(e,nv.DEFAULT_COLLECTION_PERCENTILE,nv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nv.DEFAULT_COLLECTION_PERCENTILE=10,nv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nv.DEFAULT=new nv(41943040,nv.DEFAULT_COLLECTION_PERCENTILE,nv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nv.DISABLED=new nv(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new n_(0)}static Bn(){return new n_(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.changes=new tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eV.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?W.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tD(n.mutation,e,eo.empty(),P.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tc()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tc()){let r=tl();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ta();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tl();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tc()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=ts,i=tl(),a=tl();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tL)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tD(a.mutation,t,a.mutation.getFieldMask(),P.now())):i.set(t.key,eo.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nT(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tl(),r=new en((e,t)=>e-t),s=tc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=n.get(e)||eo.empty();a=s.applyToLocalView(i,a),n.set(e,a);let o=(r.get(s.batchId)||tc()).add(e);r=r.insert(s.batchId,o)})}).next(()=>{let i=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tl();l.forEach(e=>{if(!s.has(e)){let r=tb(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return W.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return K.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{let i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):W.resolve(tl()),a=-1,o=s;return i.next(t=>W.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),s.get(t)?W.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tc())).next(e=>({batchId:a,changes:to(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(e=>{let t=ta();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let s=t.collectionGroup,i=ta();return this.indexManager.getCollectionParents(e,s).next(a=>W.forEach(a,a=>{let o=new e4(a.child(s),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eV.newInvalidDocument(r)))});let n=ta();return e.forEach((e,r)=>{let i=s.get(e);void 0!==i&&tD(i.mutation,r,eo.empty(),P.now()),tt(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return W.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:nt(t.createTime)}),W.resolve()}getNamedQuery(e,t){return W.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=ns(e);return 4===t.length?B.emptyPath():nu(t)}(e.parent),s=e.structuredQuery,i=s.from?s.from.length:0,a=null;if(i>0){1===i||I();let e=s.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];s.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nd(e.unaryFilter.field);return eq.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nd(e.unaryFilter.field);return eq.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nd(e.unaryFilter.field);return eq.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=nd(e.unaryFilter.field);return eq.create(s,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):void 0!==t.fieldFilter?eq.create(nd(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eB.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op)):I()}(e);return n instanceof eB&&e$(t=n)&&ez(t)?n.getFilters():[n]}(s.where));let l=[];s.orderBy&&(l=s.orderBy.map(e=>new eP(nd(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;s.limit&&(u=null==(n="object"==typeof(t=s.limit)?t.value:t)?null:n);let h=null;s.startAt&&(h=function(e){let t=!!e.before;return new eO(e.values||[],t)}(s.startAt));let c=null;return s.endAt&&(c=function(e){let t=!e.before;return new eO(e.values||[],t)}(s.endAt)),new e4(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e5(t,t.limit,"L"):t}(t.bundledQuery),readTime:nt(t.readTime)}),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.overlays=new en(K.comparator),this.Pr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tl();return W.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),W.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Pr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),W.resolve()}getOverlaysForCollection(e,t,n){let r=tl(),s=t.length+1,i=new K(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return W.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new en((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=tl(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tl(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return W.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tB(t,n));let s=this.Pr.get(t);void 0===s&&(s=tc(),this.Pr.set(t,s)),this.Pr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.sessionToken=eu.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.Ir=new ei(nk.Tr),this.Er=new ei(nk.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let n=new nk(e,t);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new nk(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new K(new B([])),n=new nk(t,e),r=new nk(t,e+1),s=[];return this.Er.forEachInRange([n,r],e=>{this.Rr(e),s.push(e.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){let t=new K(new B([])),n=new nk(t,e),r=new nk(t,e+1),s=tc();return this.Er.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new nk(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nk{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return K.comparator(e.key,t.key)||F(e.yr,t.yr)}static dr(e,t){return F(e.yr,t.yr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new ei(nk.Tr)}checkEmpty(e){return W.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tU(s,t,n,r);for(let t of(this.mutationQueue.push(i),r))this.Sr=this.Sr.add(new nk(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return W.resolve(i)}lookupMutationBatch(e,t){return W.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Dr(t+1),r=n<0?0:n;return W.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nk(t,0),r=new nk(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,r],e=>{let t=this.br(e.yr);s.push(t)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ei(F);return t.forEach(e=>{let t=new nk(e,0),r=new nk(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],e=>{n=n.add(e.yr)})}),W.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,s=n;K.isDocumentKey(s)||(s=s.child(""));let i=new nk(new K(s),0),a=new ei(F);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.yr)),!0)},i),W.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||I(),this.mutationQueue.shift();let n=this.Sr;return W.forEach(t.mutations,r=>{let s=new nk(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){let n=new nk(t,0),r=this.Sr.firstAfterOrEqual(n);return W.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.Fr=e,this.docs=new en(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return W.resolve(n?n.document.mutableCopy():eV.newInvalidDocument(t))}getEntries(e,t){let n=ts;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eV.newInvalidDocument(e))}),W.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=ts,i=t.path,a=new K(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=K.comparator(e.documentKey,t.documentKey))?n:F(e.largestBatchId,t.largestBatchId)}(new G(a.readTime,a.key,-1),n)||(r.has(a.key)||tt(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,t,n,r){I()}Mr(e,t){return W.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nx(this)}getSize(e){return W.resolve(this.size)}}class nx extends nE{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)}),W.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.persistence=e,this.Or=new tr(e=>e0(e),e1),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new nN,this.targetCount=0,this.Br=n_.Ln()}forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),W.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new n_(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Qn(t),W.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,n){let r=0,s=[];return this.Or.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Or.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),W.waitFor(s).next(()=>r)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){let n=this.Or.get(t)||null;return W.resolve(n)}addMatchingKeys(e,t,n){return this.Lr.Ar(t,n),W.resolve()}removeMatchingKeys(e,t,n){this.Lr.Vr(t,n);let r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),W.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Lr.pr(t);return W.resolve(n)}containsKey(e,t){return W.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,t){this.kr={},this.overlays={},this.qr=new X(0),this.Qr=!1,this.Qr=!0,this.Kr=new nA,this.referenceDelegate=e(this),this.$r=new nR(this),this.indexManager=new ny,this.remoteDocumentCache=new nD(e=>this.referenceDelegate.Ur(e)),this.serializer=new ng(t),this.Wr=new nC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new nb(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,n){v("MemoryPersistence","Starting transaction:",e);let r=new nV(this.qr.next());return this.referenceDelegate.Gr(),n(r).next(e=>this.referenceDelegate.zr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}jr(e,t){return W.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}class nV extends j{constructor(e){super(),this.currentSequenceNumber=e}}class nO{constructor(e){this.persistence=e,this.Hr=new nN,this.Jr=null}static Yr(e){return new nO(e)}get Zr(){if(this.Jr)return this.Jr;throw I()}addReference(e,t,n){return this.Hr.addReference(n,t),this.Zr.delete(n.toString()),W.resolve()}removeReference(e,t,n){return this.Hr.removeReference(n,t),this.Zr.add(n.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),W.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(e=>this.Zr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Zr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Zr,n=>{let r=K.fromPath(n);return this.Xr(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(e=>{e?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return W.or([()=>W.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ki=n,this.$i=r}static Ui(e,t){let n=tc(),r=tc();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nF(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,n,r){let s={result:null};return this.Ji(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.Yi(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;let n=new nM;return this.Zi(e,t,n).next(r=>{if(s.result=r,this.Gi)return this.Xi(e,t,n,r.size)})}).next(()=>s.result)}Xi(e,t,n,r){return n.documentReadCount<this.zi?(w()<=u.in.DEBUG&&v("QueryEngine","SDK will not create cache indexes for query:",te(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),W.resolve()):(w()<=u.in.DEBUG&&v("QueryEngine","Query:",te(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ji*r?(w()<=u.in.DEBUG&&v("QueryEngine","The SDK decides to create cache indexes for query:",te(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e8(t))):W.resolve())}Ji(e,t){if(e3(t))return W.resolve(null);let n=e8(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e8(t=e5(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let s=tc(...r);return this.Hi.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let i=this.es(t,r);return this.ts(t,i,s,n.readTime)?this.Ji(e,e5(t,null,"F")):this.ns(e,i,t,n)}))})))}Yi(e,t,n,r){return e3(t)||r.isEqual(U.min())?W.resolve(null):this.Hi.getDocuments(e,n).next(s=>{let i=this.es(t,s);return this.ts(t,i,n,r)?W.resolve(null):(w()<=u.in.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),te(t)),this.ns(e,i,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new G(U.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r)),K.empty(),-1)}(r,0)).next(e=>e))})}es(e,t){let n=new ei(tn(e));return t.forEach((t,r)=>{tt(e,r)&&(n=n.add(r))}),n}ts(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Zi(e,t,n){return w()<=u.in.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",te(t)),this.Hi.getDocumentsMatchingQuery(e,t,G.min(),n)}ns(e,t,n,r){return this.Hi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,t,n,r){this.persistence=e,this.rs=t,this.serializer=r,this.ss=new en(F),this.os=new tr(e=>e0(e),e1),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(n)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nI(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}async function nq(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.cs(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let s=[],i=[],a=tc();for(let e of r)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ls:e,removedBatchIds:s,addedBatchIds:i}))})})}function nB(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}async function nz(e,t,n){let r=e.ss.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!Y(e))throw e;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ss=e.ss.remove(t),e.os.delete(r.target)}function n$(e,t,n){let r=U.min(),s=tc();return e.persistence.runTransaction("Execute query","readwrite",i=>(function(e,t,n){let r=e.os.get(n);return void 0!==r?W.resolve(e.ss.get(r)):e.$r.getTargetData(t,n)})(e,i,e8(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.$r.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.rs.getDocumentsMatchingQuery(i,t,n?r:U.min(),n?s:tc())).next(n=>{var r;let i;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e._s.get(r)||U.min(),n.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e._s.set(r,i),{documents:n,Is:s}}))}class nK{constructor(){this.activeTargetIds=td}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class nQ{constructor(){this.io=new nK,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,n){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new nK,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){for(let e of(v("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.lo))e(0)}co(){for(let e of(v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.lo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nH=null;function nW(){return null===nH?nH=268435456+Math.round(2147483648*Math.random()):nH++,"0x"+nH.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nY={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nJ="WebChannelConnection";class nZ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.bo=t+"://"+e.host,this.Do=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get vo(){return!1}Fo(e,t,n,r,s){let i=nW(),a=this.Mo(e,t.toUriEncodedString());v("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);let o={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(o,r,s),this.Oo(e,a,o,n).then(t=>(v("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw E("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t})}No(e,t,n,r,s,i){return this.Fo(e,t,n,r,s)}xo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+p}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Mo(e,t){let n=nY[e];return`${this.bo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,n,r){let s=nW();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();v(nJ,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:v(nJ,`RPC '${e}' ${s} timed out`),a(new S(C.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let n=o.getStatus();if(v(nJ,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(t)>=0?t:C.UNKNOWN}(t.status);a(new S(e,t.message))}else a(new S(C.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new S(C.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{v(nJ,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);v(nJ,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}Lo(e,t,n){let s=nW(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new d.zI({})),this.xo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=i.join("");v(nJ,`Creating RPC '${e}' stream ${s}: ${h}`,l);let c=a.createWebChannel(h,l),f=!1,m=!1,g=new nX({Po:t=>{m?v(nJ,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(f||(v(nJ,`Opening RPC '${e}' stream ${s} transport.`),c.open(),f=!0),v(nJ,`RPC '${e}' stream ${s} sending:`,t),c.send(t))},Io:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{m||(v(nJ,`RPC '${e}' stream ${s} transport opened.`),g.po())}),p(c,d.ii.EventType.CLOSE,()=>{m||(m=!0,v(nJ,`RPC '${e}' stream ${s} transport closed`),g.wo())}),p(c,d.ii.EventType.ERROR,t=>{m||(m=!0,E(nJ,`RPC '${e}' stream ${s} transport errored:`,t),g.wo(new S(C.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var n;if(!m){let i=t.data[0];i||I();let a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){v(nJ,`RPC '${e}' stream ${s} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return t$(t)}(t),i=a.message;void 0===n&&(n=C.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),m=!0,g.wo(new S(n,i)),c.close()}else v(nJ,`RPC '${e}' stream ${s} received:`,i),g.So(i)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?v(nJ,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===d.kN.NOPROXY&&v(nJ,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.yo()},0),g}}function n0(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(e){return new t5(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,n=1e3,r=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=n,this.ko=r,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();let t=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),r=Math.max(0,t-n);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,r,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){null!==this.Ko&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){null!==this.Ko&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,t,n,r,s,i,a,o){this.ai=e,this.jo=n,this.Ho=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new n2(e,t)}t_(){return 1===this.state||5===this.state||this.n_()}n_(){return 2===this.state||3===this.state}start(){this.Xo=0,4!==this.state?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&null===this.Yo&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,4!==e?this.e_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(_(t.toString()),_("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===C.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;let e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Jo===t&&this.h_(e,n)},t=>{e(()=>{let e=new S(C.UNKNOWN,"Fetching auth token failed: "+t.message);return this.P_(e)})})}h_(e,t){let n=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(e=>{n(()=>this.P_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.Xo?this.T_(e):this.onNext(e))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n3 extends n4{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,s;t.targetChange;let i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:I(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.useProto3Json?(void 0===s||"string"==typeof s||I(),eu.fromBase64String(s||"")):(void 0===s||s instanceof f||s instanceof Uint8Array||I(),eu.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause;n=new tZ(i,a,o,l&&new S(void 0===l.code?C.UNKNOWN:t$(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let s=na(e,r.document.name),i=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):U.min(),o=new eL({mapValue:{fields:r.document.fields}}),l=eV.newFoundDocument(s,i,a,o);n=new tX(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let s=na(e,r.document),i=r.readTime?nt(r.readTime):U.min(),a=eV.newNoDocument(s,i);n=new tX([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let s=na(e,r.document);n=new tX([],r.removedTargetIds||[],s,null)}else{if(!("filter"in t))return I();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:s}=e,i=new tz(r,s);n=new tJ(e.targetId,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return U.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?nt(t.readTime):U.min()}(e);return this.listener.E_(t,n)}d_(e){let t={};t.database=nl(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=e2(r)?{documents:{documents:[no(e,r.path)]}}:{query:function(e,t){var n,r;let s;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=no(e,s);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eq?function(e){if("=="===e.op){if(eb(e.value))return{unaryFilter:{field:nc(e.field),op:"IS_NAN"}};if(ek(e.value))return{unaryFilter:{field:nc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eb(e.value))return{unaryFilter:{field:nc(e.field),op:"IS_NOT_NAN"}};if(ek(e.value))return{unaryFilter:{field:nc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nc(e.field),op:t9[e.op],value:e.value}}}(t):t instanceof eB?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t8[t.op],filters:n}}}(t):I()}(eB.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nc(e.field),direction:t3[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=t6(e,t.limit);return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{_t:i,parent:s}}(e,r)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ne(e,t.resumeToken);let r=t6(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(U.min())>0){n.readTime=t7(e,t.snapshotVersion.toTimestamp());let r=t6(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.__(t)}A_(e){let t={};t.database=nl(this.serializer),t.removeTarget=e,this.__(t)}}class n9 extends n4{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return e.streamToken||I(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&I(),this.listener.m_()}onNext(e){var t,n;e.streamToken||I(),this.lastStreamToken=e.streamToken,this.e_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||I(),t.map(e=>{let t;return(t=e.updateTime?nt(e.updateTime):nt(n)).isEqual(U.min())&&(t=nt(n)),new tS(t,e.transformResults||[])})):[]),s=nt(e.commitTime);return this.listener.f_(s,r)}g_(){let e={};e.database=nl(this.serializer),this.__(e)}V_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tR)r={update:nh(e,t.key,t.value)};else if(t instanceof tM)r={delete:ni(e,t.key)};else if(t instanceof tL)r={update:nh(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tP))return I();r={verify:ni(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ty)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tw)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof t_)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tT)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw I()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:t7(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:I()),r})(this.serializer,e))};this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.p_=!1}y_(){if(this.p_)throw new S(C.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,n,r){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Fo(e,nr(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(C.UNKNOWN,e.toString())})}No(e,t,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.No(e,nr(t,n),r,i,a,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(C.UNKNOWN,e.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class n5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){0===this.w_&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){"Online"===this.state?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,"Online"===e&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(_(t),this.b_=!1):v("OnlineStateTracker",t)}M_(){null!==this.S_&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(e=>{n.enqueueAndForget(async()=>{ro(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.N_.add(4),await re(e),e.k_.set("Unknown"),e.N_.delete(4),await n7(e)}(this))})}),this.k_=new n5(n,r)}}async function n7(e){if(ro(e))for(let t of e.L_)await t(!0)}async function re(e){for(let t of e.L_)await t(!1)}function rt(e,t){e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),ra(e)?ri(e):rI(e).n_()&&rr(e,t))}function rn(e,t){let n=rI(e);e.O_.delete(t),n.n_()&&rs(e,t),0===e.O_.size&&(n.n_()?n.s_():ro(e)&&e.k_.set("Unknown"))}function rr(e,t){if(e.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rI(e).d_(t)}function rs(e,t){e.q_.xe(t),rI(e).A_(t)}function ri(e){e.q_=new t1({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.O_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),rI(e).start(),e.k_.D_()}function ra(e){return ro(e)&&!rI(e).t_()&&e.O_.size>0}function ro(e){return 0===e.N_.size}async function rl(e){e.k_.set("Online")}async function ru(e){e.O_.forEach((t,n)=>{rr(e,t)})}async function rh(e,t){e.q_=void 0,ra(e)?(e.k_.F_(t),ri(e)):e.k_.set("Unknown")}async function rc(e,t,n){if(e.k_.set("Online"),t instanceof tZ&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.O_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.O_.delete(r),e.q_.removeTarget(r))}(e,t)}catch(n){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rd(e,n)}else if(t instanceof tX?e.q_.Ke(t):t instanceof tJ?e.q_.He(t):e.q_.We(t),!n.isEqual(U.min()))try{let t=await nB(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.q_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let s=e.O_.get(r);s&&e.O_.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.O_.get(t);if(!r)return;e.O_.set(t,r.withResumeToken(eu.EMPTY_BYTE_STRING,r.snapshotVersion)),rs(e,t);let s=new nm(r.target,t,n,r.sequenceNumber);rr(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){v("RemoteStore","Failed to raise snapshot:",t),await rd(e,t)}}async function rd(e,t,n){if(!Y(t))throw t;e.N_.add(1),await re(e),e.k_.set("Offline"),n||(n=()=>nB(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.N_.delete(1),await n7(e)})}function rf(e,t){return t().catch(n=>rd(e,n,t))}async function rm(e){let t=rC(e),n=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;ro(e)&&e.x_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.x_.length&&t.s_();break}n=r.batchId,function(e,t){e.x_.push(t);let n=rC(e);n.n_()&&n.R_&&n.V_(t.mutations)}(e,r)}catch(t){await rd(e,t)}rg(e)&&rp(e)}function rg(e){return ro(e)&&!rC(e).t_()&&e.x_.length>0}function rp(e){rC(e).start()}async function ry(e){rC(e).g_()}async function rw(e){let t=rC(e);for(let n of e.x_)t.V_(n.mutations)}async function rv(e,t,n){let r=e.x_.shift(),s=tq.from(r,t,n);await rf(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await rm(e)}async function r_(e,t){t&&rC(e).R_&&await async function(e,t){var n;if(function(e){switch(e){default:return I();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}(n=t.code)&&n!==C.ABORTED){let n=e.x_.shift();rC(e).i_(),await rf(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rm(e)}}(e,t),rg(e)&&rp(e)}async function rE(e,t){e.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");let n=ro(e);e.N_.add(3),await re(e),n&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await n7(e)}async function rT(e,t){t?(e.N_.delete(2),await n7(e)):t||(e.N_.add(2),await re(e),e.k_.set("Unknown"))}function rI(e){var t,n,r;return e.Q_||(e.Q_=(t=e.datastore,n=e.asyncQueue,r={To:rl.bind(null,e),Ao:ru.bind(null,e),Vo:rh.bind(null,e),E_:rc.bind(null,e)},t.y_(),new n3(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.L_.push(async t=>{t?(e.Q_.i_(),ra(e)?ri(e):e.k_.set("Unknown")):(await e.Q_.stop(),e.q_=void 0)})),e.Q_}function rC(e){var t,n,r;return e.K_||(e.K_=(t=e.datastore,n=e.asyncQueue,r={To:()=>Promise.resolve(),Ao:ry.bind(null,e),Vo:r_.bind(null,e),m_:rw.bind(null,e),f_:rv.bind(null,e)},t.y_(),new n9(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.L_.push(async t=>{t?(e.K_.i_(),await rm(e)):(await e.K_.stop(),e.x_.length>0&&(v("RemoteStore",`Stopping write stream with ${e.x_.length} pending writes`),e.x_=[]))})),e.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new A,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){let i=new rS(e,t,Date.now()+n,r,s);return i.start(n),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rA(e,t){if(_("AsyncQueue",`${t}: ${e}`),Y(e))return new S(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.comparator=e?(t,n)=>e(t,n)||K.comparator(t.key,n.key):(e,t)=>K.comparator(e.key,t.key),this.keyedMap=ta(),this.sortedSet=new en(this.comparator)}static emptySet(e){return new rN(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rN)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rN;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.U_=new en(K.comparator)}track(e){let t=e.doc.key,n=this.U_.get(t);n?0!==e.type&&3===n.type?this.U_=this.U_.insert(t,e):3===e.type&&1!==n.type?this.U_=this.U_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.U_=this.U_.remove(t):1===e.type&&2===n.type?this.U_=this.U_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):I():this.U_=this.U_.insert(t,e)}W_(){let e=[];return this.U_.inorderTraversal((t,n)=>{e.push(n)}),e}}class rb{constructor(e,t,n,r,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new rb(e,t,rN.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e6(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class rx{constructor(){this.queries=rR(),this.onlineState="Unknown",this.J_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=rR(),n.forEach((e,n)=>{for(let e of n.z_)e.onError(t)})}(this,new S(C.ABORTED,"Firestore shutting down"))}}function rR(){return new tr(e=>e7(e),e6)}async function rL(e,t){let n=3,r=t.query,s=e.queries.get(r);s?!s.j_()&&t.H_()&&(n=2):(s=new rD,n=t.H_()?0:1);try{switch(n){case 0:s.G_=await e.onListen(r,!0);break;case 1:s.G_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=rA(n,`Initialization of query '${te(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,s),s.z_.push(t),t.Y_(e.onlineState),s.G_&&t.Z_(s.G_)&&rM(e)}async function rV(e,t){let n=t.query,r=3,s=e.queries.get(n);if(s){let e=s.z_.indexOf(t);e>=0&&(s.z_.splice(e,1),0===s.z_.length?r=t.H_()?0:1:!s.j_()&&t.H_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function rO(e,t){let n=!1;for(let r of t){let t=r.query,s=e.queries.get(t);if(s){for(let e of s.z_)e.Z_(r)&&(n=!0);s.G_=r}}n&&rM(e)}function rF(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.z_)e.onError(n);e.queries.delete(t)}function rM(e){e.J_.forEach(e=>{e.next()})}(a=i||(i={})).X_="default",a.Cache="cache";class rP{constructor(e,t,n){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=n||{}}Z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rb(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){return!(e.fromCache&&this.H_())||(!this.options.oa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ra(e){if(e.docChanges.length>0)return!0;let t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}sa(e){e=rb.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==i.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.key=e}}class rq{constructor(e){this.key=e}}class rB{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=tc(),this.mutatedKeys=tc(),this.da=tn(e),this.Aa=new rN(this.da)}get Ra(){return this.Ia}Va(e,t){let n=t?t.ma:new rk,r=t?t.Aa:this.Aa,s=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tt(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.fa(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.da(h,o)>0||l&&0>this.da(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Aa:i,ma:n,ts:a,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;let i=e.ma.W_();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return n(e)-n(t)})(e.type,t.type)||this.da(e.doc,t.doc)),this.ga(n),r=null!=r&&r;let a=t&&!r?this.pa():[],o=0===this.Ea.size&&this.current&&!r?1:0,l=o!==this.Ta;return(this.Ta=o,0!==i.length||l)?{snapshot:new rb(this.query,e.Aa,s,i,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new rk,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=e.current)}pa(){if(!this.current)return[];let e=this.Ea;this.Ea=tc(),this.Aa.forEach(e=>{this.wa(e.key)&&(this.Ea=this.Ea.add(e.key))});let t=[];return e.forEach(e=>{this.Ea.has(e)||t.push(new rq(e))}),this.Ea.forEach(n=>{e.has(n)||t.push(new rU(n))}),t}Sa(e){this.Ia=e.Is,this.Ea=tc();let t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return rb.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,0===this.Ta,this.hasCachedResults)}}class rz{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class r${constructor(e){this.key=e,this.Da=!1}}class rK{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ca={},this.va=new tr(e=>e7(e),e6),this.Fa=new Map,this.Ma=new Set,this.xa=new en(K.comparator),this.Oa=new Map,this.Na=new nN,this.La={},this.Ba=new Map,this.ka=n_.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return!0===this.qa}}async function rQ(e,t,n=!0){let r;let s=sn(e),i=s.va.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ba()):r=await rj(s,t,n,!0),r}async function rG(e,t){let n=sn(e);await rj(n,t,!0,!1)}async function rj(e,t,n,r){var s,i;let a;let o=await (s=e.localStore,i=e8(t),s.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return s.$r.getTargetData(e,i).next(n=>n?(t=n,W.resolve(t)):s.$r.allocateTargetId(e).next(n=>(t=new nm(i,n,"TargetPurposeListen",e.currentSequenceNumber),s.$r.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=s.ss.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(s.ss=s.ss.insert(e.targetId,e),s.os.set(i,e.targetId)),e})),l=o.targetId,u=n?e.sharedClientState.addLocalQueryTarget(l):"not-current";return r&&(a=await rH(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rt(e.remoteStore,o),a}async function rH(e,t,n,r,s){e.Qa=(t,n,r)=>(async function(e,t,n,r){let s=t.view.Va(n);s.ts&&(s=await n$(e.localStore,t.query,!1).then(({documents:e})=>t.view.Va(e,s)));let i=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i,a);return r5(e,t.targetId,o.ya),o.snapshot})(e,t,n,r);let i=await n$(e.localStore,t,!0),a=new rB(t,i.Is),o=a.Va(i.documents),l=tY.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);r5(e,n,u.ya);let h=new rz(t,n,a);return e.va.set(t,h),e.Fa.has(n)?e.Fa.get(n).push(t):e.Fa.set(n,[t]),u.snapshot}async function rW(e,t,n){let r=e.va.get(t),s=e.Fa.get(r.targetId);if(s.length>1)return e.Fa.set(r.targetId,s.filter(e=>!e6(e,t))),void e.va.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await nz(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rn(e.remoteStore,r.targetId),r9(e,r.targetId)}).catch(H)):(r9(e,r.targetId),await nz(e.localStore,r.targetId,!0))}async function rY(e,t){let n=e.va.get(t),r=e.Fa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rn(e.remoteStore,n.targetId))}async function rX(e,t,n){var r;let s=(e.remoteStore.remoteSyncer.applySuccessfulWrite=r1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r2.bind(null,e),e);try{let e;let i=await function(e,t){let n,r;let s=P.now(),i=t.reduce((e,t)=>e.add(t.key),tc());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ts,l=tc();return e.us.getEntries(a,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let i=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),s=tp(r.transform,e||null);null!=s&&(null===n&&(n=eL.empty()),n.set(r.field,s))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&i.push(new tL(e.key,t,function e(t){let n=[];return ee(t.fields,(t,r)=>{let s=new $([t]);if(eD(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(s);else for(let e of t)n.push(s.child(e))}else n.push(s)}),new eo(n)}(t.value.mapValue),tA.exists(!0)))}return e.mutationQueue.addMutationBatch(a,s,i,t)}).next(t=>{r=t;let s=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,s)})}).then(()=>({batchId:r.batchId,changes:to(n)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),r=i.batchId,(e=s.La[s.currentUser.toKey()])||(e=new en(F)),e=e.insert(r,n),s.La[s.currentUser.toKey()]=e,await r7(s,i.changes),await rm(s.remoteStore)}catch(t){let e=rA(t,"Failed to persist write");n.reject(e)}}async function rJ(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{var i;let a,o;let l=e.us.newChangeBuffer({trackRemovals:!0});r=e.ss;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.$r.removeMatchingKeys(s,i.removedDocuments,a).next(()=>e.$r.addMatchingKeys(s,i.addedDocuments,a)));let h=l.withSequenceNumber(s.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eu.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(e.$r.updateTargetData(s,h))});let h=ts,c=tc();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(s,n))}),u.push((i=t.documentUpdates,a=tc(),o=tc(),i.forEach(e=>a=a.add(e)),l.getEntries(s,a).next(e=>{let t=ts;return i.forEach((n,r)=>{let s=e.get(n);r.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(U.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):v("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)}),{hs:t,Ps:o}})).next(e=>{h=e.hs,c=e.Ps})),!n.isEqual(U.min())){let t=e.$r.getLastRemoteSnapshotVersion(s).next(t=>e.$r.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(t)}return W.waitFor(u).next(()=>l.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,h,c)).next(()=>h)}).then(t=>(e.ss=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Oa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||I(),t.addedDocuments.size>0?r.Da=!0:t.modifiedDocuments.size>0?r.Da||I():t.removedDocuments.size>0&&(r.Da||I(),r.Da=!1))}),await r7(e,n,t)}catch(e){await H(e)}}function rZ(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let s=[];e.va.forEach((e,n)=>{let r=n.view.Y_(t);r.snapshot&&s.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.z_)e.Y_(t)&&(n=!0)}),n&&rM(r),s.length&&e.Ca.E_(s),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function r0(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Oa.get(t),s=r&&r.key;if(s){let n=new en(K.comparator);n=n.insert(s,eV.newNoDocument(s,U.min()));let r=tc().add(s),i=new tW(U.min(),new Map,new en(F),n,r);await rJ(e,i),e.xa=e.xa.remove(s),e.Oa.delete(t),r6(e)}else await nz(e.localStore,t,!1).then(()=>r9(e,t,n)).catch(H)}async function r1(e,t){var n;let r=t.batch.batchId;try{let s=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let s=n.batch,i=s.keys(),a=W.resolve();return i.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let i=n.docVersions.get(e);null!==i||I(),0>t.version.compareTo(i)&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tc();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});r3(e,r,null),r4(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await r7(e,s)}catch(e){await H(e)}}async function r2(e,t,n){var r;try{let s=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||I(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});r3(e,t,n),r4(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await r7(e,s)}catch(e){await H(e)}}function r4(e,t){(e.Ba.get(t)||[]).forEach(e=>{e.resolve()}),e.Ba.delete(t)}function r3(e,t,n){let r=e.La[e.currentUser.toKey()];if(r){let s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),e.La[e.currentUser.toKey()]=r}}function r9(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Fa.get(t)))e.va.delete(r),n&&e.Ca.Ka(r,n);e.Fa.delete(t),e.isPrimaryClient&&e.Na.mr(t).forEach(t=>{e.Na.containsKey(t)||r8(e,t)})}function r8(e,t){e.Ma.delete(t.path.canonicalString());let n=e.xa.get(t);null!==n&&(rn(e.remoteStore,n),e.xa=e.xa.remove(t),e.Oa.delete(n),r6(e))}function r5(e,t,n){for(let r of n)r instanceof rU?(e.Na.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.xa.get(n)||e.Ma.has(r)||(v("SyncEngine","New document in limbo: "+n),e.Ma.add(r),r6(e))}(e,r)):r instanceof rq?(v("SyncEngine","Document no longer in limbo: "+r.key),e.Na.removeReference(r.key,t),e.Na.containsKey(r.key)||r8(e,r.key)):I()}function r6(e){for(;e.Ma.size>0&&e.xa.size<e.maxConcurrentLimboResolutions;){let t=e.Ma.values().next().value;e.Ma.delete(t);let n=new K(B.fromString(t)),r=e.ka.next();e.Oa.set(r,new r$(n)),e.xa=e.xa.insert(n,r),rt(e.remoteStore,new nm(e8(new e4(n.path)),r,"TargetPurposeLimboResolution",X.oe))}}async function r7(e,t,n){let r=[],s=[],i=[];e.va.isEmpty()||(e.va.forEach((a,o)=>{i.push(e.Qa(o,t,n).then(t=>{var i;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(i=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===i?void 0:i.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=nF.Ui(o.targetId,t);s.push(e)}}))}),await Promise.all(i),e.Ca.E_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>W.forEach(t,t=>W.forEach(t.Ki,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>W.forEach(t.$i,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!Y(e))throw e;v("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ss.get(t),r=n.snapshotVersion,s=n.withLastLimboFreeSnapshotVersion(r);e.ss=e.ss.insert(t,s)}}}(e.localStore,s))}async function se(e,t){var n;if(!e.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());let r=await nq(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ba.forEach(e=>{e.forEach(e=>{e.reject(new S(C.CANCELLED,n))})}),e.Ba.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await r7(e,r.ls)}}function st(e,t){let n=e.Oa.get(t);if(n&&n.Da)return tc().add(n.key);{let n=tc(),r=e.Fa.get(t);if(!r)return n;for(let t of r){let r=e.va.get(t);n=n.unionWith(r.view.Ra)}return n}}function sn(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=rJ.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=st.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r0.bind(null,e),e.Ca.E_=rO.bind(null,e.eventManager),e.Ca.Ka=rF.bind(null,e.eventManager),e}class sr{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=n1(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new nU(t,new nP,e.initialUser,this.serializer)}createPersistence(e){return new nL(nO.Yr,this.serializer)}createSharedClientState(e){return new nQ}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ss{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rZ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=se.bind(null,this.syncEngine),await rT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rx}createDatastore(e){let t=n1(e.databaseInfo.databaseId),n=new nZ(e.databaseInfo);return new n8(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new n6(t,this.datastore,e.asyncQueue,e=>rZ(this.syncEngine,e,0),nj.D()?new nj:new nG)}createSyncEngine(e,t){return function(e,t,n,r,s,i,a){let o=new rK(e,t,n,r,s,i);return a&&(o.qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){v("RemoteStore","RemoteStore shutting down."),e.N_.add(5),await re(e),e.B_.shutdown(),e.k_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):_("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=g.UNAUTHENTICATED,this.clientId=O.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{v("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(v("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new A;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rA(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function so(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nq(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function sl(e,t){e.asyncQueue.verifyOperationInProgress();let n=await su(e);v("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rE(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rE(t.remoteStore,n)),e._onlineComponents=t}async function su(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await so(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;E("Error using user provided cache. Falling back to memory cache: "+t),await so(e,new sr)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await so(e,new sr)}return e._offlineComponents}async function sh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await sl(e,e._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await sl(e,new ss))),e._onlineComponents}async function sc(e){let t=await sh(e),n=t.eventManager;return n.onListen=rQ.bind(null,t.syncEngine),n.onUnlisten=rW.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=rG.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=rY.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(e,t,n){if(!n)throw new S(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sg(e){if(!K.isDocumentKey(e))throw new S(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sp(e){if(K.isDocumentKey(e))throw new S(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sy(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":I()}function sw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=sy(e);throw new S(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new S(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new S(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sd(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class s_{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=sf.get(e);t&&(v("ComponentProvider","Removing Datastore"),sf.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sE(this.firestore,e,this._query)}}class sT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sI(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sT(this.firestore,e,this._key)}}class sI extends sE{constructor(e,t,n){super(e,t,new e4(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sT(this.firestore,null,new K(e))}withConverter(e){return new sI(this.firestore,e,this._path)}}function sC(e,t,...n){if(e=(0,h.m9)(e),sm("collection","path",t),e instanceof s_){let r=B.fromString(t,...n);return sp(r),new sI(e,null,r)}{if(!(e instanceof sT||e instanceof sI))throw new S(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(B.fromString(t,...n));return sp(r),new sI(e.firestore,null,r)}}function sS(e,t,...n){if(e=(0,h.m9)(e),1==arguments.length&&(t=O.newId()),sm("doc","path",t),e instanceof s_){let r=B.fromString(t,...n);return sg(r),new sT(e,null,new K(r))}{if(!(e instanceof sT||e instanceof sI))throw new S(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(B.fromString(t,...n));return sg(r),new sT(e.firestore,e instanceof sI?e.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new n2(this,"async_queue_retry"),this.Tu=()=>{let e=n0();e&&v("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};let e=n0();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;let t=n0();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});let t=new A;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(0!==this.au.length){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Y(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){let t=this._u.then(()=>(this.hu=!0,e().catch(e=>{let t;throw this.lu=e,this.hu=!1,_("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.hu=!1,e))));return this._u=t,t}enqueueAfterDelay(e,t,n){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);let r=rS.createAndSchedule(this,e,t,n,e=>this.Ru(e));return this.cu.push(r),r}Eu(){this.lu&&I()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(let t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{for(let t of(this.cu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.cu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){let t=this.cu.indexOf(e);this.cu.splice(t,1)}}class sN extends s_{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sA,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sD(this),this._firestoreClient.terminate()}}function sk(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,n,r={}){var s;let i=(e=sw(e,s_))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&E("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=g.MOCK_USER;else{t=(0,h.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new S(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new g(i)}e._authCredentials=new b(new N(t,n))}}(r,...e)}return r}function sb(e){return e._firestoreClient||sD(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sD(e){var t,n,r,s;let i=e._freezeSettings(),a=(s=e._databaseId,new ey(s,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,sd(i.experimentalLongPollingOptions),i.useFetchStreams));e._firestoreClient=new sa(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sx(eu.fromBase64String(e))}catch(e){throw new S(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sx(eu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sO=/^__.*__$/;class sF{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tL(e,this.data,this.fieldMask,t,this.fieldTransforms):new tR(e,this.data,t,this.fieldTransforms)}}class sM{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new tL(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class sU{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new sU(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.wu({path:n,bu:!1});return r.Du(e),r}Cu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.wu({path:n,bu:!1});return r.pu(),r}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return sY(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(0===e.length)throw this.Fu("Document fields must not be empty");if(sP(this.yu)&&sO.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class sq{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||n1(e)}Ou(e,t,n,r=!1){return new sU({yu:e,methodName:t,xu:n,path:$.emptyPath(),bu:!1,Mu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sB(e){let t=e._freezeSettings(),n=n1(e._databaseId);return new sq(e._databaseId,!!t.ignoreUndefinedProperties,n)}class sz extends sL{_toFieldTransform(e){if(2!==e.yu)throw 1===e.yu?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sz}}function s$(e,t){if(sQ(e=(0,h.m9)(e)))return sG("Unsupported field value:",t,e),sK(e,t);if(e instanceof sL)return function(e,t){if(!sP(t.yu))throw t.Fu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.bu&&4!==t.yu)throw t.Fu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let s of e){let e=s$(s,t.vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,s;return n=t.serializer,"number"==typeof(s=r=e)&&Number.isInteger(s)&&!J(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?tm(r):tf(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=P.fromDate(e);return{timestampValue:t7(t.serializer,n)}}if(e instanceof P){let n=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t7(t.serializer,n)}}if(e instanceof sV)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sx)return{bytesValue:ne(t.serializer,e._byteString)};if(e instanceof sT){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fu(`Unsupported field value: ${sy(e)}`)}(e,t)}function sK(e,t){let n={};return et(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ee(e,(e,r)=>{let s=s$(r,t.Su(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function sQ(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof sV||e instanceof sx||e instanceof sT||e instanceof sL)}function sG(e,t,n){if(!sQ(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=sy(n);throw"an object"===r?t.Fu(e+" a custom object"):t.Fu(e+" "+r)}}function sj(e,t,n){if((t=(0,h.m9)(t))instanceof sR)return t._internalPath;if("string"==typeof t)return sW(e,t);throw sY("Field path arguments must be of type string or ",e,!1,void 0,n)}let sH=RegExp("[~\\*/\\[\\]]");function sW(e,t,n){if(t.search(sH)>=0)throw sY(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sR(...t.split("."))._internalPath}catch(r){throw sY(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sY(e,t,n,r,s){let i=r&&!r.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new S(C.INVALID_ARGUMENT,o+e+l)}function sX(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sZ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(s0("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sZ extends sJ{data(){return super.data()}}function s0(e,t){return"string"==typeof t?sW(e,t):t instanceof sR?t._internalPath:t._delegate._internalPath}class s1{convertValue(e,t="none"){switch(e_(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ed(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ef(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw I()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ee(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new sV(ed(e.latitude),ed(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eg(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ep(e));default:return null}}convertTimestamp(e){let t=ec(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=B.fromString(e);nf(n)||I();let r=new ew(n.get(1),n.get(3)),s=new K(n.popFirst(5));return r.isEqual(t)||_(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s4 extends sJ{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new s3(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(s0("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class s3 extends s4{data(e={}){return super.data(e)}}class s9{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new s2(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new s3(this._firestore,this._userDataWriter,n.key,n,new s2(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new s3(e._firestore,e._userDataWriter,n.doc.key,n.doc,new s2(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new s3(e._firestore,e._userDataWriter,t.doc.key,t.doc,new s2(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(i=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class s8 extends s1{constructor(e){super(),this.firestore=e}convertBytes(e){return new sx(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sT(this.firestore,null,t)}}function s5(e){e=sw(e,sE);let t=sw(e.firestore,sN),n=sb(t),r=new s8(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new A;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){let i=new rP(n,new si({next:n=>{t.enqueueAndForget(()=>rV(e,i)),n.fromCache&&"server"===r.source?s.reject(new S(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),{includeMetadataChanges:!0,oa:!0});return rL(e,i)})(await sc(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new s9(t,r,e,n)))}function s6(e,t,n,...r){e=sw(e,sT);let s=sw(e.firestore,sN),i=sB(s);return ie(s,[("string"==typeof(t=(0,h.m9)(t))||t instanceof sR?function(e,t,n,r,s,i){let a=e.Ou(1,t,n),o=[sj(t,r,n)],l=[s];if(i.length%2!=0)throw new S(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)o.push(sj(t,i[e])),l.push(i[e+1]);let u=[],c=eL.empty();for(let e=o.length-1;e>=0;--e)if(!sX(u,o[e])){let t=o[e],n=l[e];n=(0,h.m9)(n);let r=a.Cu(t);if(n instanceof sz)u.push(t);else{let e=s$(n,r);null!=e&&(u.push(t),c.set(t,e))}}return new sM(c,new eo(u),a.fieldTransforms)}(i,"updateDoc",e._key,t,n,r):function(e,t,n,r){let s=e.Ou(1,t,n);sG("Data must be an object, but it was:",s,r);let i=[],a=eL.empty();return ee(r,(e,r)=>{let o=sW(t,e,n);r=(0,h.m9)(r);let l=s.Cu(o);if(r instanceof sz)i.push(o);else{let e=s$(r,l);null!=e&&(i.push(o),a.set(o,e))}}),new sM(a,new eo(i),s.fieldTransforms)}(i,"updateDoc",e._key,t)).toMutation(e._key,tA.exists(!0))])}function s7(e,t){var n;let r=sw(e.firestore,sN),s=sS(e),i=(n=e.converter)?n.toFirestore(t):t;return ie(r,[(function(e,t,n,r,s,i={}){let a,o;let l=e.Ou(i.merge||i.mergeFields?2:0,t,n,s);sG("Data must be an object, but it was:",l,r);let u=sK(r,l);if(i.merge)a=new eo(l.fieldMask),o=l.fieldTransforms;else if(i.mergeFields){let e=[];for(let r of i.mergeFields){let s=sj(t,r,n);if(!l.contains(s))throw new S(C.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);sX(e,s)||e.push(s)}a=new eo(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sF(new eL(u),a,o)})(sB(e.firestore),"addDoc",s._key,i,null!==e.converter,{}).toMutation(s._key,tA.exists(!1))]).then(()=>s)}function ie(e,t){return function(e,t){let n=new A;return e.asyncQueue.enqueueAndForget(async()=>rX(await sh(e).then(e=>e.syncEngine),t,n)),n.promise}(sb(e),t)}new WeakMap,function(e=!0){p=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let s=t.getProvider("app").getImmediate(),i=new sN(new D(t.getProvider("auth-internal")),new V(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ew(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(m,"4.6.5",void 0),(0,o.KN)(m,"4.6.5","esm2017")}()}}]);