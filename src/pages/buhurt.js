import React from 'react'

import headImg from '../images/pic-battle.jpg'

class BuhurtPage extends React.PureComponent {
  render() {
    return (
      <div>
        <h2 className="major">Buhurt</h2>
        <span className="image main"><img src={headImg} alt=""/></span>
        <p>Buhurt is a full contact medieval fighting sport. From a modern perspective, we could call it "MMA with
          swords".</p>
        <p>Reenactment is not the objective, but by promoting full contact and intense team based competitive combats,
          Buhurt tends to reach a different vision of reenactment.</p>


        <h3>Historicity</h3>
        <p>The modernized sport Buhurt is a free interpretation of medieval buhurts, a format of the competition that
          happened
          before or in parallel of the well known jousting tournaments. To get <a
            href="https://academyofhistoricalmartialarts.weebly.com/blog/history-of-european-martial-arts-part-xi-buhurt">more
            information</a>
        </p>
        <p>The armour the fighter wears follow a relatively strict set of rules to ensure the full kit of one fighter is
          accurate to a
          specific warrior from a region at a specific time.
          The fighting techniques, however, are free of any historical constraint.
        </p>
        <p>For modern safety and other reasons, the rules are also different from what they used to be.</p>


        <h3>Rules</h3>
        <ul>
          <li>In group fight, the objective is to put the enemy on the ground.</li>
          <li>In duels, the fight is point based.</li>
        </ul>
        <p>Rules are pretty basics and limited to minimal safety rules, the most impactful one being: no thrust
          allowed</p>


        <h3>Strategy</h3>
        <p>There are as many strategies as teams out there, but often some specific roles stands out:</p>
        <ul>
          <li>Tank: with heavy armour and stong stance, (s)he blocks multiple enemies.</li>
          <li>Damage Dealer: hitting people with typically a long poleaxe, (s)he also need a good armour.</li>
          <li>Runner: Light fighters can run fast to surprise the opponents and hit hard.</li>
        </ul>
      </div>
    )
  }
}

export default BuhurtPage