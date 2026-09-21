window.FP_TEXTBOOK = window.FP_TEXTBOOK || {};
window.FP_TEXTBOOK.f2 = {
id:'f2', title:'リスク管理', short:'リスク', color:'--f2',
topics:[
{id:'f2-01', title:'保険の基本と契約者保護', tags:['頻出'], blocks:[
 {t:'ul',x:[
  '<b>生命保険契約者保護機構</b>：破綻時、原則<u>責任準備金の90%</u>まで補償（高予定利率契約は除く）。国内で営業する生保は<u>外資系も含めて</u>加入が義務。',
  '<b>損害保険契約者保護機構</b>：自賠責・地震保険は<u>100%</u>補償。自動車・火災など任意分野は破綻後3か月以内の事故は100%、以降は80%。',
  '<u>少額短期保険業者と共済は、どちらの保護機構にも加入していない</u>。',
  '<b>クーリングオフ</b>：申込日または書面交付日の<u>いずれか遅い日</u>から8日以内に書面（電磁的記録も可）で撤回できる。<u>保険期間1年以下</u>、法人契約、医師の診査を受けた後などは対象外。',
  '<b>告知義務</b>：契約者・被保険者が重要事項を告げる義務。違反があると解除されうるが、契約から<u>2年</u>経過などで解除できなくなる。',
  '<b>ソルベンシー・マージン比率</b>：通常の予測を超えるリスクへの支払余力。<u>200%</u>が健全性の目安。'
 ]},
 {t:'ul',x:['<b>保険法の時効</b>：保険給付を請求する権利、保険料の返還を請求する権利は、行使できる時から<u>3年</u>で時効消滅する。','<b>保険料の仕組み</b>：予定死亡率・予定利率・予定事業費率の3つで決まる。<u>予定利率を引き下げると保険料は高くなる</u>（運用で増える前提が減るため）。']},
 {t:'fig', cap:'少額短期保険業者と共済はどちらの保護機構にも入っていません。ここが引っかけどころです。', svg:'<svg viewBox="0 0 520 228" role="img" aria-label="破綻したときの補償割合を、生命保険・地震保険・任意保険・少額短期保険で比べた図"><g fill="currentColor" font-size="11.5"><text x="8" y="46" font-size="11.5" text-anchor="start" font-weight="700">生命保険</text><rect x="170" y="28" width="300" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="170" y="28" width="270.0" height="24" rx="5" class="fc-f" opacity="0.3"/><text x="478" y="45" font-size="12" text-anchor="end" font-weight="700">90%</text><text x="170" y="66" font-size="10" text-anchor="start">責任準備金等の 90%</text><text x="8" y="90" font-size="11.5" text-anchor="start" font-weight="700">地震保険・自賠責</text><rect x="170" y="72" width="300" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="170" y="72" width="300.0" height="24" rx="5" class="ac-f" opacity="0.3"/><text x="478" y="89" font-size="12" text-anchor="end" font-weight="700">100%</text><text x="170" y="110" font-size="10" text-anchor="start">100%</text><text x="8" y="134" font-size="11.5" text-anchor="start" font-weight="700">任意の自動車・火災</text><rect x="170" y="116" width="300" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="170" y="116" width="240.0" height="24" rx="5" class="fc-f" opacity="0.3"/><text x="478" y="133" font-size="12" text-anchor="end" font-weight="700">80%</text><text x="170" y="154" font-size="10" text-anchor="start">破綻後3か月以内は100%、以降 80%</text><text x="8" y="178" font-size="11.5" text-anchor="start" font-weight="700">少額短期・共済</text><rect x="170" y="160" width="300" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><text x="478" y="177" font-size="12" text-anchor="end" font-weight="700">×</text><text x="170" y="198" font-size="10" text-anchor="start">対象外（0%）</text><text x="260" y="216" font-size="11.5" text-anchor="middle" font-weight="700">生保は「保険金額の90%」ではなく「責任準備金等の90%」</text></g></svg>'},
 {t:'key',x:['生保は90%、地震・自賠責は100%','クーリングオフは「遅い日から8日」','ソルベンシー・マージン比率は高いほど健全（200%が目安）']}
]},
{id:'f2-02', title:'生命保険の種類', tags:['頻出'], blocks:[
 {t:'ul',x:[
  '<b>定期保険</b>：一定期間だけの死亡保障。掛捨てで保険料は割安、満期保険金なし。',
  '<b>終身保険</b>：一生涯の保障。解約返戻金が貯まる。',
  '<b>養老保険</b>：死亡保険金と満期保険金が<u>同額</u>。貯蓄性が高い。',
  '<b>定期保険特約付終身保険</b>：終身（主契約）に定期（特約）を上乗せ。更新型は更新のたびに保険料が上がる。',
  '<b>収入保障保険</b>：死亡後、保険金を年金形式で受け取る。総受取額は時の経過とともに減る（逓減）ため保険料は割安。',
  '<b>逓減定期保険</b>：保険金額が減っていく。保険料は一定。',
  '<b>変額保険</b>：運用実績で保険金・解約返戻金が変動。<u>死亡保険金には基本保険金額の最低保証がある</u>が、解約返戻金に最低保証はない。',
  '<b>低解約返戻金型終身保険</b>：保険料払込期間中の解約返戻金を低く抑え、保険料を割安にしたもの。'
 ]},
 {t:'ul',x:['<b>確定年金</b>：被保険者の生死にかかわらず一定期間年金が支払われる（死亡後は遺族が受け取る）。<b>終身年金</b>：生存している限り支払われる。','<b>終身年金の保険料</b>は、他の条件が同じなら<u>女性のほうが高い</u>（平均寿命が長く受取期間が長いため）。','<b>定期保険特約付終身保険（更新型）</b>：更新時に<u>告知や診査は不要</u>で健康状態にかかわらず更新できるが、保険料は更新時の年齢で再計算され上がる。']},
 {t:'fig', cap:'定期は掛捨てで満期保険金なし、終身は保障が一生涯、養老は満期保険金が死亡保険金と同額です。', svg:'<svg viewBox="0 0 520 182" role="img" aria-label="定期保険、終身保険、養老保険の保障期間と満期保険金の有無を比べた図"><g fill="currentColor" font-size="11.5"><defs><marker id="a202" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><text x="84" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">定期保険</text><line x1="12" y1="120" x2="162" y2="120" stroke="currentColor" stroke-width="1.2"/><rect x="12" y="62" width="104" height="58" rx="0" class="fc-f" opacity="0.24"/><line x1="116" y1="56" x2="116" y2="126" stroke="currentColor" stroke-width="1.4"/><text x="64" y="96" font-size="11.5" text-anchor="middle">保障</text><text x="116" y="138" font-size="11" text-anchor="middle">満期</text><text x="134" y="34" font-size="10.5" text-anchor="middle" class="dim">満期保険金なし</text><text x="254" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">終身保険</text><line x1="182" y1="120" x2="332" y2="120" stroke="currentColor" stroke-width="1.2"/><rect x="182" y="62" width="128" height="58" rx="0" class="fc-f" opacity="0.24"/><line x1="310" y1="120" x2="332" y2="120" stroke="currentColor" stroke-width="2" class="fc-s" marker-end="url(#a202)"/><text x="246" y="96" font-size="11.5" text-anchor="middle">保障</text><text x="254" y="138" font-size="11" text-anchor="middle">一生涯つづく</text><text x="304" y="34" font-size="10.5" text-anchor="middle" class="dim">満期保険金なし</text><text x="424" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">養老保険</text><line x1="352" y1="120" x2="502" y2="120" stroke="currentColor" stroke-width="1.2"/><rect x="352" y="62" width="104" height="58" rx="0" class="fc-f" opacity="0.24"/><line x1="456" y1="56" x2="456" y2="126" stroke="currentColor" stroke-width="1.4"/><text x="404" y="96" font-size="11.5" text-anchor="middle">保障</text><text x="456" y="138" font-size="11" text-anchor="middle">満期</text><rect x="460" y="44" width="34" height="76" rx="4" class="mk-f" opacity="0.4"/><text x="474" y="34" font-size="10.5" text-anchor="middle" font-weight="700">満期保険金</text><text x="260" y="168" font-size="12" text-anchor="middle" font-weight="700">養老保険は死亡保険金と満期保険金が同額</text></g></svg>'},
 {t:'ex',q:'子どもが独立するまでの生活費を効率よく備えたい。向いている商品は？',a:'収入保障保険。必要保障額が年々減っていく形と一致し、同じ当初保障額の定期保険より保険料が安い。'},
 {t:'key',x:['養老保険＝死亡保険金と満期保険金が同額','変額保険は死亡保険金だけ最低保証あり']}
]},
{id:'f2-03', title:'生命保険契約の手続きと見直し', tags:[], blocks:[
 {t:'ul',x:[
  '<b>責任開始日</b>：①申込み ②告知・診査 ③第1回保険料の払込み が<u>すべて</u>そろった時点。',
  '<b>猶予期間</b>：月払いは翌月末日まで、年払い・半年払いは翌々月の契約応当日まで。',
  '<b>自動振替貸付</b>：解約返戻金の範囲内で保険料を立て替え、契約を存続させる。',
  '<b>失効と復活</b>：猶予期間を過ぎると失効。原則3年以内なら、告知・診査と<u>延滞保険料の払込み</u>で復活できる。保険料は<u>失効前と同じ</u>。',
  '<b>払済保険</b>：以後の保険料払込みをやめ、その時点の解約返戻金で<u>保険期間はそのまま</u>に保険金額を下げる。特約は消滅。',
  '<b>延長（定期）保険</b>：保険金額はそのままに、<u>保険期間を短く</u>する。',
  '<b>契約者貸付</b>：解約返戻金の一定範囲内で借りられる。利息がつく。',
  '<b>契約転換</b>：今の契約の責任準備金を下取りして新契約へ。<u>転換時の年齢・保険料率</u>が適用され、告知・診査が必要。'
 ]},
 {t:'ul',x:['<b>契約者貸付</b>の限度は<u>解約返戻金の一定範囲内</u>。死亡保険金額が限度ではない。','<b>契約転換</b>の保険料は<u>転換時の年齢・保険料率</u>で計算される（転換前の年齢ではない）。']},
 {t:'fig', cap:'「払済＝期間そのまま・金額ダウン」「延長＝金額そのまま・期間ショート」。名前と中身が逆に感じるので注意。', svg:'<svg viewBox="0 0 520 212" role="img" aria-label="払済保険は保険期間を変えずに保険金額を下げ、延長保険は保険金額を変えずに期間を短くすることを比べた図"><g fill="currentColor" font-size="11.5"><defs><marker id="a203" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><text x="124" y="18" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">払済保険</text><line x1="16" y1="128" x2="232" y2="128" stroke="currentColor" stroke-width="1.2"/><line x1="16" y1="128" x2="16" y2="40" stroke="currentColor" stroke-width="1.2"/><rect x="16" y="52" width="216" height="76" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><text x="124" y="46" font-size="10" text-anchor="middle" class="dim">もとの契約</text><rect x="16" y="92" width="216" height="36" rx="0" class="fc-f" opacity="0.3"/><line x1="46" y1="88" x2="46" y2="58" stroke="currentColor" stroke-width="1.4" class="ng-s" marker-end="url(#a203)"/><text x="124" y="116" font-size="11" text-anchor="middle">下がった保険金額</text><text x="124" y="178" font-size="10.5" text-anchor="middle">保険期間はそのまま／保険金額を下げる</text><text x="378" y="18" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">延長（定期）保険</text><line x1="270" y1="128" x2="486" y2="128" stroke="currentColor" stroke-width="1.2"/><line x1="270" y1="128" x2="270" y2="40" stroke="currentColor" stroke-width="1.2"/><rect x="270" y="52" width="216" height="76" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><text x="378" y="46" font-size="10" text-anchor="middle" class="dim">もとの契約</text><rect x="270" y="52" width="120" height="76" rx="0" class="fc-f" opacity="0.3"/><line x1="396" y1="140" x2="310" y2="140" stroke="currentColor" stroke-width="1.4" class="ng-s" marker-end="url(#a203)"/><text x="390" y="156" font-size="11" text-anchor="middle">期間が短くなる</text><text x="378" y="178" font-size="10.5" text-anchor="middle">保険金額はそのまま／期間を短くする</text><text x="260" y="200" font-size="11.5" text-anchor="middle" font-weight="700">どちらも以後の保険料は払わない。特約は原則として消滅する</text></g></svg>'},
 {t:'key',x:['払済＝期間そのまま・金額を下げる／延長＝金額そのまま・期間を短くする','復活しても保険料は元のまま（安いままなのが利点）']}
]},
{id:'f2-04', title:'生命保険料控除', tags:['超頻出','計算'], blocks:[
 {t:'p',x:'2012年1月1日以降の契約が<b>新制度</b>、それ以前が<b>旧制度</b>。新制度は3つの枠に分かれます。'},
 {t:'table',head:['区分','所得税の控除限度額','住民税の控除限度額'],rows:[
  ['新：一般生命保険料','40,000円','28,000円'],
  ['新：個人年金保険料','40,000円','28,000円'],
  ['新：介護医療保険料','40,000円','28,000円'],
  ['新：合計','120,000円','70,000円（合計の上限）'],
  ['旧：一般生命保険料','50,000円','35,000円'],
  ['旧：個人年金保険料','50,000円','35,000円'],
  ['旧：合計','100,000円','70,000円（合計の上限）']
 ]},
 {t:'ul',x:[
  '<b>介護医療保険料控除は新制度だけ</b>にある枠。',
  '<b>個人年金保険料控除</b>を使うには「個人年金保険料税制適格特約」が必要。条件：年金受取人が契約者またはその配偶者／被保険者と同一、保険料払込期間10年以上、確定年金なら受取開始が60歳以降で受取期間10年以上。',
  '<u>一時払いの個人年金は適格特約を付けられない</u>（＝一般生命保険料控除の扱い）。',
  '<u>傷害特約・災害割増特約など「身体の傷害のみ」を原因とするものは控除の対象外</u>。',
  '住民税は新旧合計しても<u>70,000円</u>が上限（28,000×3＝84,000ではない）。'
 ]},
 {t:'fig', cap:'新制度は3枠×4万円で12万円、旧制度は2枠×5万円で10万円。傷害特約・災害割増特約の保険料は対象外です。', svg:'<svg viewBox="0 0 520 224" role="img" aria-label="生命保険料控除の新制度と旧制度の枠と限度額を比べた図"><g fill="currentColor" font-size="11.5"><text x="130" y="20" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">新制度（2012年1月1日以降）</text><text x="390" y="20" font-size="12" text-anchor="middle" font-weight="700">旧制度（2011年12月31日以前）</text><rect x="20" y="38" width="220" height="32" rx="5" class="fc-f" opacity="0.22"/><text x="130" y="59" font-size="11.5" text-anchor="middle" font-weight="700">一般生命保険料　4万円</text><rect x="20" y="78" width="220" height="32" rx="5" class="fc-f" opacity="0.22"/><text x="130" y="99" font-size="11.5" text-anchor="middle" font-weight="700">介護医療保険料　4万円</text><text x="246" y="99" font-size="12" text-anchor="start" class="fc-f" font-weight="700">←</text><rect x="20" y="118" width="220" height="32" rx="5" class="fc-f" opacity="0.22"/><text x="130" y="139" font-size="11.5" text-anchor="middle" font-weight="700">個人年金保険料　4万円</text><rect x="280" y="38" width="220" height="32" rx="5" class="" opacity="0.12"/><rect x="280" y="38" width="220" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="59" font-size="11.5" text-anchor="middle" font-weight="700">一般生命保険料　5万円</text><rect x="280" y="78" width="220" height="32" rx="5" class="" opacity="0.12"/><rect x="280" y="78" width="220" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="99" font-size="11.5" text-anchor="middle" font-weight="700">個人年金保険料　5万円</text><text x="390" y="131" font-size="11" text-anchor="middle" class="dim">介護医療の枠はない</text><line x1="20" y1="168" x2="240" y2="168" stroke="currentColor" stroke-width="2" class="fc-s"/><text x="130" y="188" font-size="14" text-anchor="middle" class="fc-f" font-weight="700">合計 12万円</text><line x1="280" y1="168" x2="500" y2="168" stroke="currentColor" stroke-width="2"/><text x="390" y="188" font-size="14" text-anchor="middle" font-weight="700">合計 10万円</text><text x="260" y="212" font-size="11.5" text-anchor="middle" font-weight="700">住民税は新旧あわせて 7万円が上限（2.8万×3ではない）</text></g></svg>'},
 {t:'ex',q:'新制度で一般生命保険料12万円、介護医療保険料6万円、個人年金保険料10万円を支払った。所得税の生命保険料控除額は？',a:'各枠とも上限40,000円。一般40,000＋介護医療40,000＋個人年金40,000＝<b>120,000円</b>（合計上限も12万円なのでOK）。'},
 {t:'key',x:['新：4万×3＝12万／旧：5万×2＝10万','住民税の合計上限は7万円','傷害特約・災害割増特約は対象外']}
]},
{id:'f2-05', title:'生命保険金と税金（契約形態別）', tags:['超頻出'], blocks:[
 {t:'p',x:'死亡保険金は<b>契約者（保険料負担者）・被保険者・受取人</b>の組み合わせで税目が変わります。3級で最もよく出る論点のひとつ。'},
 {t:'table',head:['契約者','被保険者','受取人','税金'],rows:[
  ['A','A','B','<b>相続税</b>（非課税枠あり）'],
  ['A','B','A','<b>所得税（一時所得）</b>'],
  ['A','B','C','<b>贈与税</b>']
 ]},
 {t:'ul',x:[
  '相続税になる場合、相続人が受け取ると「<b>500万円 × 法定相続人の数</b>」が非課税。相続放棄した人や相続人以外が受け取ると非課税枠は使えない。',
  '一時所得の金額＝（受取額 − 払込保険料 − 特別控除50万円）。総所得に算入するのは<u>その2分の1</u>。',
  '<b>満期保険金</b>：契約者＝受取人なら所得税（一時所得）、契約者≠受取人なら贈与税。',
  '<b>入院給付金・手術給付金・高度障害保険金・特定疾病保険金</b>は、被保険者や配偶者等が受け取る場合<u>非課税</u>。',
  '<b>リビングニーズ特約</b>の保険金も非課税。ただし使い切れずに残ると相続財産になる。'
 ]},
 {t:'fig', cap:'同じ色は同じ人。契約者と受取人が同じなら所得税、契約者と被保険者が同じなら相続税、三者バラバラなら贈与税。', svg:'<svg viewBox="0 0 520 246" role="img" aria-label="契約者、被保険者、受取人の組み合わせで死亡保険金にかかる税金が変わることを示す表"><g fill="currentColor" font-size="11.5"><defs><marker id="a205" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><text x="60" y="20" font-size="11" text-anchor="middle" class="dim">契約者</text><text x="160" y="20" font-size="11" text-anchor="middle" class="dim">被保険者</text><text x="260" y="20" font-size="11" text-anchor="middle" class="dim">受取人</text><text x="420" y="20" font-size="11" text-anchor="middle" class="dim">かかる税金</text><line x1="8" y1="30" x2="512" y2="30" stroke="currentColor" stroke-width="1" opacity="0.4"/><rect x="34" y="42" width="52" height="30" rx="15" class="p1" opacity="0.22"/><text x="60" y="62" font-size="11.5" text-anchor="middle" class="p1" font-weight="700">夫</text><rect x="134" y="42" width="52" height="30" rx="15" class="p1" opacity="0.22"/><text x="160" y="62" font-size="11.5" text-anchor="middle" class="p1" font-weight="700">夫</text><rect x="234" y="42" width="52" height="30" rx="15" class="p2" opacity="0.22"/><text x="260" y="62" font-size="11.5" text-anchor="middle" class="p2" font-weight="700">妻</text><line x1="296" y1="57" x2="340" y2="57" stroke="currentColor" stroke-width="1.3" marker-end="url(#a205)"/><text x="420" y="56" font-size="14" text-anchor="middle" font-weight="700">相続税</text><text x="420" y="72" font-size="10.5" text-anchor="middle" class="dim">500万円×法定相続人の非課税枠あり</text><line x1="8" y1="90" x2="512" y2="90" stroke="currentColor" stroke-width="1" opacity="0.18"/><rect x="34" y="108" width="52" height="30" rx="15" class="p1" opacity="0.22"/><text x="60" y="128" font-size="11.5" text-anchor="middle" class="p1" font-weight="700">夫</text><rect x="134" y="108" width="52" height="30" rx="15" class="p2" opacity="0.22"/><text x="160" y="128" font-size="11.5" text-anchor="middle" class="p2" font-weight="700">妻</text><rect x="234" y="108" width="52" height="30" rx="15" class="p1" opacity="0.22"/><text x="260" y="128" font-size="11.5" text-anchor="middle" class="p1" font-weight="700">夫</text><line x1="296" y1="123" x2="340" y2="123" stroke="currentColor" stroke-width="1.3" marker-end="url(#a205)"/><text x="420" y="122" font-size="14" text-anchor="middle" font-weight="700">所得税</text><text x="420" y="138" font-size="10.5" text-anchor="middle" class="dim">一時所得。50万円を控除して1/2</text><line x1="8" y1="156" x2="512" y2="156" stroke="currentColor" stroke-width="1" opacity="0.18"/><rect x="34" y="174" width="52" height="30" rx="15" class="p1" opacity="0.22"/><text x="60" y="194" font-size="11.5" text-anchor="middle" class="p1" font-weight="700">夫</text><rect x="134" y="174" width="52" height="30" rx="15" class="p2" opacity="0.22"/><text x="160" y="194" font-size="11.5" text-anchor="middle" class="p2" font-weight="700">妻</text><rect x="234" y="174" width="52" height="30" rx="15" class="p3" opacity="0.22"/><text x="260" y="194" font-size="11.5" text-anchor="middle" class="p3" font-weight="700">子</text><line x1="296" y1="189" x2="340" y2="189" stroke="currentColor" stroke-width="1.3" marker-end="url(#a205)"/><text x="420" y="188" font-size="14" text-anchor="middle" font-weight="700">贈与税</text><text x="420" y="204" font-size="10.5" text-anchor="middle" class="dim">三者がバラバラのとき</text></g></svg>'},
 {t:'ex',q:'契約者・被保険者が夫、受取人が妻。死亡保険金3,000万円、法定相続人は妻と子2人。相続税の課税対象額は？',a:'非課税枠＝500万円 × 3人 ＝ 1,500万円。3,000 − 1,500 ＝ <b>1,500万円</b>が課税対象。'},
 {t:'ex',q:'契約者・受取人が夫、被保険者が妻の満期保険金500万円（払込保険料400万円）。課税は？',a:'契約者＝受取人なので所得税の一時所得。(500 − 400 − 50)＝50万円、総所得に入るのはその1/2で<b>25万円</b>。'},
 {t:'key',x:['「契約者と受取人が同じ」→ 所得税、「全員バラバラ」→ 贈与税','非課税枠500万円×法定相続人は「相続税になるとき」だけ','一時所得は50万円控除してから2分の1']}
]},
{id:'f2-06', title:'損害保険（火災・地震・自動車）', tags:['頻出'], blocks:[
 {t:'ul',x:[
  '<b>火災保険</b>：住宅火災保険は火災・落雷・破裂爆発・風災等。住宅総合保険はさらに水災・盗難・水漏れ等も。<u>地震・噴火・津波による損害は火災保険では補償されない</u>。',
  '<b>地震保険</b>：<u>単独では契約できず</u>、火災保険に付帯する。保険金額は主契約の<u>30〜50%</u>の範囲、建物5,000万円・家財1,000万円が上限。',
  '地震保険の支払は<b>全損100%／大半損60%／小半損30%／一部損5%</b>の4区分。',
  '地震保険の割引（建築年・耐震等級・免震建築物・耐震診断）は<u>重複適用できない</u>。',
  '<b>自賠責保険</b>：強制加入。<u>対人賠償のみ</u>（対物は対象外）。死亡3,000万円、後遺障害最高4,000万円、傷害120万円が限度。',
  '<b>任意の自動車保険</b>：対人・対物賠償は自分と家族（父母・配偶者・子）への賠償は対象外。人身傷害保険は過失割合にかかわらず自分側の損害を補償。',
  '<b>失火責任法</b>：軽過失の失火では隣家への損害賠償責任を負わない。ただし<u>重過失の場合と、借家人の家主に対する債務不履行責任は別</u>。'
 ]},
 {t:'fig', cap:'地震・噴火・津波による損害は火災保険では出ません。支払いは全損・大半損・小半損・一部損の4区分です。', svg:'<svg viewBox="0 0 520 248" role="img" aria-label="地震保険は火災保険の30から50パーセントの範囲で付帯し、支払いは全損100、大半損60、小半損30、一部損5パーセントの4区分であることを示す図"><g fill="currentColor" font-size="11.5"><text x="260" y="18" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">地震保険は火災保険に付帯する（単独では契約できない）</text><rect x="30" y="30" width="460" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="150" y="54" font-size="11.5" text-anchor="middle">火災保険　保険金額 2,000万円</text><rect x="290" y="32" width="196" height="36" rx="5" class="mk-f" opacity="0.35"/><text x="388" y="55" font-size="11" text-anchor="middle">地震保険 600〜1,000万円</text><text x="388" y="84" font-size="11" text-anchor="middle" font-weight="700">主契約の 30〜50%</text><text x="260" y="112" font-size="12" text-anchor="middle" font-weight="700">支払われる保険金（地震保険金額に対して）</text><rect x="26" y="122.0" width="96" height="78.0" rx="4" class="fc-f" opacity="0.3"/><text x="74" y="118.0" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">100%</text><text x="74" y="216" font-size="11.5" text-anchor="middle">全損</text><rect x="148" y="153.2" width="96" height="46.800000000000004" rx="4" class="fc-f" opacity="0.3"/><text x="196" y="149.2" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">60%</text><text x="196" y="216" font-size="11.5" text-anchor="middle">大半損</text><rect x="270" y="176.6" width="96" height="23.400000000000002" rx="4" class="fc-f" opacity="0.3"/><text x="318" y="172.6" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">30%</text><text x="318" y="216" font-size="11.5" text-anchor="middle">小半損</text><rect x="392" y="196.1" width="96" height="3.9000000000000004" rx="4" class="fc-f" opacity="0.3"/><text x="440" y="192.1" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">5%</text><text x="440" y="216" font-size="11.5" text-anchor="middle">一部損</text><line x1="20" y1="200" x2="500" y2="200" stroke="currentColor" stroke-width="1.2"/><text x="260" y="236" font-size="11" text-anchor="middle">建物は5,000万円、家財は1,000万円が上限。割引は重複して使えない</text></g></svg>'},
 {t:'ex',q:'地震で自宅が全焼した。火災保険だけで補償される？',a:'されない。地震を原因とする火災は地震保険の対象。火災保険に地震保険を付帯していなければ支払われない。'},
 {t:'ex', q:'火災保険の保険金額2,000万円の建物に地震保険を付帯する。設定できる保険金額の範囲は？', a:'2,000万円の30〜50%なので<b>600万円〜1,000万円</b>。建物の上限5,000万円の範囲内でもある。'},
 {t:'key',x:['地震保険は単独不可、30〜50%、4区分','自賠責は対人のみ','失火責任法でも借家人の家主への責任は残る']}
]},
{id:'f2-07', title:'傷害保険・賠償責任保険・第三分野', tags:[], blocks:[
 {t:'ul',x:[
  '<b>普通傷害保険</b>：国内外の日常生活の「急激・偶然・外来」の事故。<u>細菌性食中毒・地震噴火津波・病気は対象外</u>（特約で付帯可）。',
  '<b>国内旅行傷害保険</b>：<u>細菌性食中毒は補償される</u>。地震等は対象外。',
  '<b>海外旅行傷害保険</b>：細菌性食中毒も<u>地震・噴火・津波も補償される</u>。',
  '<b>個人賠償責任保険</b>：日常生活の賠償事故。<u>業務中・自動車事故・預かり物・故意は対象外</u>。',
  '<b>PL保険（生産物賠償責任）</b>：製造・販売した商品が原因で他人に損害。<b>施設所有（管理）者賠償責任保険</b>：施設の欠陥や業務中の事故。',
  '<b>医療保険</b>：1入院の支払限度日数と通算限度日数がある。退院後<u>180日以内</u>に同じ原因で再入院すると「1入院」として通算されるのが一般的。',
  '<b>がん保険</b>：契約日から<u>90日（3か月）の免責期間</u>がある。'
 ]},
 {t:'ul',x:['<b>先進医療特約</b>：<u>療養を受けた日</u>時点で厚生労働大臣が定める先進医療が対象。契約日時点ではない。','<b>必要保障額</b>＝遺族の支出見込総額 −（遺族の収入見込総額 ＋ 保有金融資産）。死亡退職金や公的年金も収入に含める。']},
 {t:'fig', cap:'食中毒は普通が×・国内が○・海外が○。地震は普通と国内が×で海外だけ○。海外旅行傷害保険が一番広いと覚えます。', svg:'<svg viewBox="0 0 520 218" role="img" aria-label="細菌性食中毒と地震が、普通傷害保険、国内旅行傷害保険、海外旅行傷害保険それぞれで補償されるかを示す表"><g fill="currentColor" font-size="11.5"><text x="180" y="24" font-size="10.5" text-anchor="middle" font-weight="700">普通傷害保険</text><text x="292" y="24" font-size="10.5" text-anchor="middle" font-weight="700">国内旅行傷害保険</text><text x="404" y="24" font-size="10.5" text-anchor="middle" font-weight="700">海外旅行傷害保険</text><text x="8" y="78" font-size="11.5" text-anchor="start" font-weight="700">細菌性食中毒</text><rect x="132" y="44" width="96" height="48" rx="8" class="ng-f" opacity="0.16"/><text x="180" y="76" font-size="11" text-anchor="middle" class="ng-f" font-weight="700">対象外</text><rect x="244" y="44" width="96" height="48" rx="8" class="ac-f" opacity="0.16"/><text x="292" y="76" font-size="11" text-anchor="middle" class="ac-f" font-weight="700">補償される</text><rect x="356" y="44" width="96" height="48" rx="8" class="ac-f" opacity="0.16"/><text x="404" y="76" font-size="11" text-anchor="middle" class="ac-f" font-weight="700">補償される</text><text x="8" y="140" font-size="11.5" text-anchor="start" font-weight="700">地震・噴火・津波</text><rect x="132" y="106" width="96" height="48" rx="8" class="ng-f" opacity="0.16"/><text x="180" y="138" font-size="11" text-anchor="middle" class="ng-f" font-weight="700">対象外</text><rect x="244" y="106" width="96" height="48" rx="8" class="ng-f" opacity="0.16"/><text x="292" y="138" font-size="11" text-anchor="middle" class="ng-f" font-weight="700">対象外</text><rect x="356" y="106" width="96" height="48" rx="8" class="ac-f" opacity="0.16"/><text x="404" y="138" font-size="11" text-anchor="middle" class="ac-f" font-weight="700">補償される</text><text x="260" y="186" font-size="11.5" text-anchor="middle">急激・偶然・外来の事故が原則。病気や自然の疾病は対象外</text><text x="260" y="206" font-size="11" text-anchor="middle">普通傷害保険は国内外を問わず日常生活の事故をカバーする</text></g></svg>'},
 {t:'key',x:['食中毒：普通×／国内○／海外○　地震：普通×／国内×／海外○','個人賠償は「業務中・車・預かり物」が3大除外','がん保険は90日待つ']}
]},
{id:'f2-08', title:'損害保険と税金・法人契約', tags:[], blocks:[
 {t:'ul',x:[
  '<b>地震保険料控除</b>：所得税は支払保険料の<u>全額（最高50,000円）</u>、住民税は2分の1（最高25,000円）。',
  '<b>個人が受け取る損害保険金</b>：損害の補填なので原則<u>非課税</u>（車両保険金、火災保険金など）。',
  '傷害保険の死亡保険金は、生命保険と同じく契約形態により相続税・所得税・贈与税。',
  '<b>法人の保険</b>：従業員全員加入の養老保険で、死亡保険金受取人＝遺族、満期保険金受取人＝法人とする「<u>ハーフタックスプラン</u>」は、保険料の2分の1を福利厚生費として損金算入できる。'
 ]},
 {t:'fig', cap:'地震保険料控除は所得税5万円・住民税2.5万円。傷害保険の死亡保険金は生命保険と同じく契約形態で税目が変わります。', svg:'<svg viewBox="0 0 520 234" role="img" aria-label="地震保険料控除の限度額、個人が受け取る損害保険金の非課税、法人のハーフタックスプランをまとめた図"><g fill="currentColor" font-size="11.5"><defs><marker id="a208" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><text x="140" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">地震保険料控除の限度額</text><text x="8" y="54" font-size="11.5" text-anchor="start" font-weight="700">所得税</text><rect x="70" y="34" width="200" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="70" y="34" width="200" height="28" rx="5" class="fc-f" opacity="0.32"/><text x="170" y="53" font-size="10.5" text-anchor="middle">最高5万円</text><text x="8" y="98" font-size="11.5" text-anchor="start" font-weight="700">住民税</text><rect x="70" y="78" width="200" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="70" y="78" width="100.0" height="28" rx="5" class="ac-f" opacity="0.32"/><text x="170" y="97" font-size="10.5" text-anchor="middle">最高2.5万円</text><text x="400" y="20" font-size="12.5" text-anchor="middle" class="ac-f" font-weight="700">個人が受け取る損害保険金</text><rect x="300" y="34" width="208" height="72" rx="10" class="ac-f" opacity="0.16"/><text x="404" y="68" font-size="15" text-anchor="middle" class="ac-f" font-weight="700">原則 非課税</text><text x="404" y="88" font-size="10.5" text-anchor="middle">損害の補填だから</text><line x1="8" y1="130" x2="512" y2="130" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="260" y="152" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">法人の養老保険（ハーフタックスプラン）</text><rect x="90" y="164" width="166" height="34" rx="6" class="fc-f" opacity="0.26"/><text x="173" y="179" font-size="10.5" text-anchor="middle">死亡保険金 → 遺族</text><text x="173" y="193" font-size="9.5" text-anchor="middle">保険料の1/2 は福利厚生費</text><rect x="264" y="164" width="166" height="34" rx="6" class="" opacity="0.1"/><rect x="264" y="164" width="166" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="347" y="179" font-size="10.5" text-anchor="middle">満期保険金 → 法人</text><text x="347" y="193" font-size="9.5" text-anchor="middle">残り1/2 は資産計上</text><text x="260" y="222" font-size="11" text-anchor="middle">従業員全員加入が条件。特定の人だけだと給与扱いになる</text></g></svg>'},
 {t:'key',x:['地震保険料控除は所得税5万円・住民税2.5万円','損害保険金は原則非課税']}
]}
]};
