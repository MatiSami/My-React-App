import React, { Component } from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import "./map-style.scss";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLand: "",
    };

    this.changeMap = this.changeMap.bind(this);
  }

  changeMap(e) {
    this.setState({
      id: e.currentTarget.id,
      activeLand: e.currentTarget.getAttribute("title"),
    });
    const regions = document.getElementsByClassName('land');
  Array.from(regions).forEach(el => el.classList.remove('land--active'));

  console.log("a", e.currentTarget.class);
  e.currentTarget.classList.add('land--active');
}

 

  render() {
    let active = this.props.visibility ? "fadeOut" : "fadeIn";
    return (
      <>
        <div className={active}>
          <div className="map">
            <h1 className="map-title">Wybierz województwo</h1>
            <div className="box">
              <div className="map-box__svg">
                {/* <?xml version="1.0" encoding="utf-8"?>
          <!-- (c) ammap.com | SVG map of Poland - Low--> */}
                <svg width="100%" height="auto" viewBox="0 0 612 577">
                  <defs>
                    {/* <amcharts:ammap projection="mercator" leftLongitude="14.122232" topLatitude="54.834793" rightLongitude="24.149724" bottomLatitude="49.002699"></amcharts:ammap> */}

                    {/* <!-- all paths ids: --> */}
                    {/* <!--{id:"pl-ds"},{id:"pl-kp"},{id:"pl-ld"},{id:"pl-lu"},{id:"pl-lb"},{id:"pl-ma"},{id:"pl-mz"},{id:"pl-op"},{id:"pl-pk"},{id:"pl-pd"},{id:"pl-pm"},{id:"pl-sl"},{id:"pl-sk"},{id:"pl-wm"},{id:"pl-wp"},{id:"pl-zp"}--> */}
                  </defs>
                  <g>
                    <path
                      id="pl-ds"
                      index="1"
                      title="Dolnośląskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M51.93,352.21L64.94,342.45L73.9,347.82L77.81,336.05L83.46,336.32L90.25,344.21L97.09,337.24L97.35,333.74L103.76,331.77L105.83,323.45L103.6,322.34L106.69,317.22L113.4,314.91L113.81,309.12L125.4,313.01L124.44,318.25L127.76,318.04L131.25,323.05L140.28,311.05L140.28,311.05L148.01,311.13L152.87,314.45L155.07,318.67L153.58,323.34L161.41,324.59L163.31,329.15L173.41,334.53L188.15,332.37L188.83,326.29L193.85,324.65L204.26,326.62L211.05,335.23L206.92,338.45L209.1,348.36L221.04,347.32L219.25,354.06L221.47,355.26L221.27,363.7L224.52,368.97L224.52,368.97L216.52,371.98L212.76,369.21L208.97,372.68L211.12,379.62L207.37,381.81L208.7,388.46L201.93,390.77L201.71,396.3L198.12,394.82L197.15,397.24L199.89,398.33L195.69,402.11L196.85,408.34L193.03,407.36L191.16,409.6L193.48,412.12L189.22,415.16L191.43,417.43L190.62,424.22L183,425.37L178.73,438.82L172.67,437.32L170.21,440.71L170.21,440.71L167.07,444.53L170.16,446.28L172.47,453.33L175.88,454.58L177.39,461.52L175.62,462.75L174.25,460.04L166.24,463.65L156.78,473.9L150.15,469.7L148.7,462.29L141.21,452.8L137.99,452.05L136.64,447.24L131.66,448.42L126.56,442.2L133.67,435.07L136.59,435.56L141.69,428.15L135.47,420.15L128.86,419.27L125.97,423.47L120.82,420.07L116.06,426.25L113.75,424.84L115.9,423.24L113.97,418.04L106.1,418.98L103.3,411.22L96.61,412.97L80.31,406.15L76.36,409.1L75.94,403.47L70.46,398.26L70.29,389.64L68.1,387.74L64,388.96L63.86,385.7L61.44,388.59L57.28,385.42L52.64,386.57L51.61,388.55L54.88,390.8L53.65,400.48L42.77,400.08L51.33,382.63L55.93,363.83z"
                    />
                    <path
                      id="pl-kp"
                      index="2"
                      title="Kujawsko-Pomorskie"
                      className="land"
                      // className={this.state.clicked === this.index ? '--active' : null}
                      onClick={e => this.changeMap(e)}
                      d="M199.53,139.83L201.36,130.26L206.82,126.21L207.67,129.85L212.75,128.66L216.65,131.3L215.73,128.36L219.65,128.17L220.97,119.22L229.94,117.1L227.99,111.95L233.29,112.47L236.87,115.87L241.11,109.79L246.97,113.85L253.07,113.81L252.82,118.18L264.79,119.71L268.25,117.86L270.4,122.93L276.54,118.8L283.59,118.33L281.77,124.16L283.61,128L291.97,129.09L291.8,130.91L297.28,128.99L306.5,130.19L306.5,130.19L309.92,131.72L314.39,148.4L316.29,149.77L321.42,147.28L325.1,152.36L329.03,151.59L330.46,155.3L339.59,154.53L342.29,162.19L339.81,165.98L342.97,166.72L344.22,174.33L344.22,174.33L336.55,178.45L339.89,187.61L339.29,194.22L331.64,190.74L332.99,193.78L330.02,196.21L324.9,195.22L329.03,203.76L326.54,203.55L323.63,208.4L329.67,215.01L329.8,219.44L324.65,217.65L325.23,222.74L320.2,227.51L323.41,230.05L317.38,237.16L321.79,238.91L317.09,245.26L313.94,245.28L315.44,250.26L315.44,250.26L310.56,253.49L311.19,255.73L309.96,254.03L300.57,256.7L300.57,256.7L292.97,249.99L292.39,253.35L282.75,256.67L278.41,247.19L268.61,240.2L260.36,243.07L259.12,235.81L252.6,241.92L249.15,241.73L248.66,239.55L242.33,238.08L242.52,234.72L235.95,235.66L236.43,232.19L231.95,231.34L229.1,225.72L224.02,224.11L222.64,226.43L222.23,224.13L217.07,229.75L214.19,218.93L207.56,222.61L204.38,221.75L205.34,217.03L200.29,214.23L200.62,211.31L206.4,210.99L207.3,196.93L194.11,190.09L197.15,176.55L199.54,175.35L196.32,174.04L195.32,167.87L200.83,166.61L202.31,162.52L196.27,154.45L191.88,154.72L190.69,151.26z"
                    />
                    <path
                      id="pl-ld"
                      title="Łódzkie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M315.44,250.26L319.38,254.98L328.9,255.68L338.53,263.88L350.4,261.63L352.96,258.46L357.66,263.59L360.84,262.37L364.1,265.68L365.87,274.34L375.71,278.65L374.95,283.36L371.52,286.09L376.12,290.65L373.5,295.2L377.77,295.12L378.24,297.54L385.05,294.66L389.66,299.91L393.36,300.1L396.58,307.41L392.77,307.74L394.34,314.59L398.94,316.82L398.95,319.64L396.64,323.52L387.23,319.34L382.61,323.12L387.36,333.19L386.29,338.41L391.29,337.52L391.82,339.7L384.93,353.46L384.93,353.46L381.45,357.44L381.37,364.62L374.59,362.49L373.43,367.82L359.15,367.99L358.04,379.46L362.71,380.92L360.92,390.15L351.47,381.84L348.57,388.91L349.45,394.22L343.61,400.76L343.61,400.76L339.04,401.85L338.67,398.85L333.81,396.34L328.23,398.32L323.07,387.18L319.38,388.25L317.47,383.06L313.58,384.34L311.3,388.71L294.69,377.71L290.53,381.76L277.31,382.27L277.31,382.27L272.31,379.42L270.16,373.96L266.58,378.72L265.09,375.94L246.46,370.58L246.46,370.58L247.93,361.15L243.65,361.72L241.79,352.97L249.06,349.3L248.39,344.41L256.6,346.78L259.95,341.27L258.3,323.2L261.83,318.7L263.47,307.05L267.41,303.84L268.17,306.07L278.7,307.04L284.94,296.35L280.88,292.6L280.06,283.03L287.17,283.62L288.04,280.92L293.31,280.79L293.36,269.18L303.16,269.23L303.84,263.3L299.58,262.75L300.57,256.7L300.57,256.7L309.96,254.03L311.19,255.73L310.56,253.49z"
                    />
                    <path
                      id="pl-lu"
                      title="Lubelskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M550.02,261.42L552.88,261.59L552.88,261.59L554.44,267.28L565.97,269.83L567.8,272.61L572.47,271.94L571.64,274.59L575.36,278.79L578.41,278.1L581.68,281.76L583.89,290.57L580.11,294.78L578.61,305.46L580.95,309.43L574.12,316.43L576.41,335.51L582.41,339.96L581.61,344.16L584.84,346.76L581.42,359.2L584.54,359.2L587.14,366.78L595.13,372.9L594.36,377.86L597.53,380.36L601.26,392.23L611.99,400.2L600.76,405.46L601.13,409.21L604.5,410.13L604.15,414.17L607.46,414.51L608.97,422.59L605.1,440.89L602.87,444.14L586.38,446.39L575.05,459.67L575.05,459.67L573.54,455.21L566.67,454.4L568.37,450.13L563.78,444.07L557.21,449.12L553.02,445.51L543.04,455.89L518.01,453.9L522.74,449.43L511.74,450.55L507.59,445.23L505.36,445.61L508.89,441.9L508.06,439.31L514.14,440.14L516.74,437.68L512.89,437.22L515.93,436.19L512.73,434.92L513.26,428.3L506.95,427.82L502.71,424.1L497.21,423.62L494.25,419.44L489.99,419.25L494.13,410.67L491.85,406.5L485.44,404.61L482.13,408L475.43,409.1L472.83,405.9L472.83,405.9L469.08,381.04L469.08,381.04L467.98,368.52L471.13,359.36L468.32,359.02L471.83,353.11L466.2,348.62L468.8,346.01L471.04,347.02L473.07,341.39L469.79,332.61L463.27,332.73L457.44,327.38L459.33,323.29L465.57,327.99L466.26,325.15L471.42,324.6L475.09,319.79L471.69,314.07L478.54,309.47L476.58,305.44L472.62,306.6L471.8,304.69L475.43,300.63L474.3,291.44L483.46,286.11L488.78,288.22L490.31,285.74L497.2,287.41L500.03,284.61L502.07,288L506.66,287.3L511.29,282.45L518.9,288.23L521.74,283.57L520.46,280.86L523.91,277.56L529.84,281.99L536.28,282.32L541.58,271.85L546.98,272.23L544.34,267.97z"
                    />
                    <path
                      id="pl-lb"
                      title="Lubuskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M29.16,229.35L31.18,223.99L35.89,226.55L38.16,225.12L41.41,213.59L45.39,210.39L44.6,207.38L48.49,206.17L46.44,204.26L48.47,201.51L58.52,206.61L73.47,200.23L71.31,193.75L75.86,194.76L87.37,188.15L93.07,191.33L95.7,189.11L98.11,190.33L105.64,177.31L113.76,179.25L112.26,185.59L112.26,185.59L113.09,204.03L108,208.56L110.6,209.69L111.24,216.88L102.57,218.9L101.48,229.05L108.56,245.22L103.29,246.25L108.84,251.03L105.56,278.82L109.83,283.3L113.36,282.63L112.06,287.46L115.71,292.3L122.12,290.45L123,297.13L120.79,300.25L126.86,302.61L129.61,299.1L132.61,299.9L138.07,304.5L140.28,311.05L140.28,311.05L131.25,323.05L127.76,318.04L124.44,318.25L125.4,313.01L113.81,309.12L113.4,314.91L106.69,317.22L103.6,322.34L105.83,323.45L103.76,331.77L97.35,333.74L97.09,337.24L90.25,344.21L83.46,336.32L77.81,336.05L73.9,347.82L64.94,342.45L51.93,352.21L51.93,352.21L50.57,341.88L37.05,335.91L38.73,323.26L28.59,307.43L34.91,299.49L38.82,283.38L34.1,278.23L36.06,266.29L28.65,262.56L25.1,250.5L31.27,240.53z"
                    />
                    <path
                      id="pl-ma"
                      title="Małopolskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M355.72,435.23L358.04,433.84L375.42,438.63L379.53,448.5L377.03,452.24L381.26,455.31L379.69,457.33L384.25,465.08L400.15,463.2L406.98,455.81L409.8,457.35L413.33,454.19L423.38,453.17L428.03,449.53L430.6,451.88L432.58,449.51L432.58,449.51L433.18,453.37L428.73,458.58L430.61,462.96L429.13,469.49L431.09,470.04L429.32,470.45L432.46,473.86L429.38,477.58L431.89,480.22L429.3,484.4L431.25,489.79L438,492.24L434.14,493.63L433.97,496.77L428.35,497.95L429.45,503.9L439.02,506.41L441.51,511.7L439.64,521.9L445.44,530.85L444.06,536.62L444.06,536.62L436.66,534.08L432.64,539.54L427.52,536.47L423.1,537.81L426.25,542.06L415.61,549.31L411.61,544.67L407.54,545.02L404.04,538.23L396.49,538.04L393.95,541.94L387.58,538.28L379.31,539.38L378.09,544.94L372.39,544.21L367.88,547.61L363.98,560.3L355.49,555.13L351.1,558.66L345.97,558.45L344.66,555.09L348.09,551.12L346.13,538.85L341.68,541.01L336.33,538.97L336.99,534.37L333.47,534.6L330.13,523.64L326.43,519.86L326.43,519.86L327.26,514.57L321.3,512.14L325.91,507.8L325.24,504.58L317.97,503.41L315.99,495.69L308.6,496.3L309.68,487.54L302.82,487.92L307.95,477.57L311.83,476.94L312.97,470.79L313.58,472.68L314.64,469.88L318.75,469.3L318.96,465.52L323.39,463.82L324.07,461.69L316.8,455.55L320.21,452.87L327.81,452.48L325.78,447.61L328.61,448.09L330.19,443.49L349.73,441.49L352.65,438.21L357.04,438.07z"
                    />
                    <path
                      id="pl-mz"
                      title="Mazowieckie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M344.22,174.33L349.39,175.11L348.73,171.12L353.84,168.1L353.57,172.1L357.74,174.87L364.98,172.91L367.4,175.14L378.11,175.85L382.45,173.28L381.79,168.59L386.63,164.84L392.57,166.96L398.89,164.28L402.65,158.06L410.72,160.08L412.04,157.03L415.22,157.26L415.85,153.17L423.09,155.74L436.57,145.86L441.91,146.9L447.34,142.4L456.33,140.85L456.33,140.85L461.51,152.41L459.62,156.05L464.71,158.07L460.59,157.59L459.98,163.14L457.92,162.77L461.79,167.95L462.28,175.87L464.59,178.65L469.1,178.1L472.73,183.57L477.17,182.5L477.16,185.8L474.59,185.09L473.51,188.71L482.52,195.72L480.4,197.86L483.17,204.23L493.88,203.44L494.14,200.58L497.17,200.71L497.67,204.32L499.57,203.91L495.86,205.81L498.08,211.71L501.11,213.68L504.26,209.9L508.56,210.71L509.12,224.22L504.83,228.71L512.98,237.83L512.04,241.8L516.18,250.7L523.9,250.78L525.29,253.48L526.69,251.6L532.64,254.14L538.84,252.96L544.69,257.41L545.21,261.4L548.75,259.77L550.02,261.42L550.02,261.42L544.34,267.97L546.98,272.23L541.58,271.85L536.28,282.32L529.84,281.99L523.91,277.56L520.46,280.86L521.74,283.57L518.9,288.23L511.29,282.45L506.66,287.3L502.07,288L500.03,284.61L497.2,287.41L490.31,285.74L488.78,288.22L483.46,286.11L474.3,291.44L475.43,300.63L471.8,304.69L472.62,306.6L476.58,305.44L478.54,309.47L471.69,314.07L475.09,319.79L471.42,324.6L466.26,325.15L465.57,327.99L459.33,323.29L457.44,327.38L463.27,332.73L469.79,332.61L473.07,341.39L471.04,347.02L468.8,346.01L466.2,348.62L471.83,353.11L468.32,359.02L471.13,359.36L467.98,368.52L469.08,381.04L469.08,381.04L465.89,383.88L457.19,380.28L450.96,381.99L448.12,386.33L441.29,379.29L429.13,379.73L429.8,375.04L425.35,372.6L427.1,369.44L424.87,366.77L423.39,372.29L419.71,373.51L413.46,371.06L411.15,375.33L402.65,370.87L400.71,373.05L401.42,368.62L395.77,363.73L392.58,364.71L389.05,357.2L390.36,354.3L384.93,353.46L384.93,353.46L391.82,339.7L391.29,337.52L386.29,338.41L387.36,333.19L382.61,323.12L387.23,319.34L396.64,323.52L398.95,319.64L398.94,316.82L394.34,314.59L392.77,307.74L396.58,307.41L393.36,300.1L389.66,299.91L385.05,294.66L378.24,297.54L377.77,295.12L373.5,295.2L376.12,290.65L371.52,286.09L374.95,283.36L375.71,278.65L365.87,274.34L364.1,265.68L360.84,262.37L357.66,263.59L352.96,258.46L350.4,261.63L338.53,263.88L328.9,255.68L319.38,254.98L315.44,250.26L315.44,250.26L313.94,245.28L317.09,245.26L321.79,238.91L317.38,237.16L323.41,230.05L320.2,227.51L325.23,222.74L324.65,217.65L329.8,219.44L329.67,215.01L323.63,208.4L326.54,203.55L329.03,203.76L324.9,195.22L330.02,196.21L332.99,193.78L331.64,190.74L339.29,194.22L339.89,187.61L336.55,178.45z"
                    />
                    <path
                      id="pl-op"
                      title="Opolskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M224.52,368.97L227.62,370.53L225.77,375.91L229.74,377.42L246.46,370.58L246.46,370.58L265.09,375.94L266.58,378.72L270.16,373.96L272.31,379.42L277.31,382.27L277.31,382.27L279.14,385.57L274.45,391.39L274.88,400.61L267.89,407.01L272.2,412.2L266.56,416.4L269.28,423.89L273.39,425.67L273.69,430.95L263.25,431.42L266.1,439.57L259.87,437.21L260.75,446.34L258.54,449.42L262.75,459.77L258.23,458.79L251.11,462.91L251.91,464.66L240.47,466.63L241.13,472.86L238.75,477.1L238.75,477.1L236.93,479.67L239.37,479.88L239.42,482.84L236.94,481.57L228.69,485.9L223,481.38L219.46,473.25L215.29,472.75L211.8,468.19L221.9,463.69L219.44,452.8L217.57,452.14L213.09,458.01L205.86,457.16L202.48,459.37L199.19,456.4L197.13,458.16L197,452.09L192.95,452.92L188.05,446.58L170.21,440.71L170.21,440.71L172.67,437.32L178.73,438.82L183,425.37L190.62,424.22L191.43,417.43L189.22,415.16L193.48,412.12L191.16,409.6L193.03,407.36L196.85,408.34L195.69,402.11L199.89,398.33L197.15,397.24L198.12,394.82L201.71,396.3L201.93,390.77L208.7,388.46L207.37,381.81L211.12,379.62L208.97,372.68L212.76,369.21L216.52,371.98z"
                    />
                    <path
                      id="pl-pk"
                      title="Podkarpackie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M472.83,405.9L475.43,409.1L482.13,408L485.44,404.61L491.85,406.5L494.13,410.67L489.99,419.25L494.25,419.44L497.21,423.62L502.71,424.1L506.95,427.82L513.26,428.3L512.73,434.92L515.93,436.19L512.89,437.22L516.74,437.68L514.14,440.14L508.06,439.31L508.89,441.9L505.36,445.61L507.59,445.23L511.74,450.55L522.74,449.43L518.01,453.9L543.04,455.89L553.02,445.51L557.21,449.12L563.78,444.07L568.37,450.13L566.67,454.4L573.54,455.21L575.05,459.67L575.05,459.67L559.03,473.49L520.09,527.51L523.58,530.93L526.56,543.26L524.65,555.49L526.6,556.91L524.2,560.66L527.13,559.97L526.13,562.19L535.3,567.97L535.29,576.23L532.69,576.71L527.99,571.99L522.6,573.28L516.85,567.97L506.74,567.73L503.4,563.53L494.76,562.73L494.63,559.9L483.93,556.76L478.62,544.63L471.2,540.6L468.06,544.02L458.48,535.26L448.78,538.47L444.06,536.62L444.06,536.62L445.44,530.85L439.64,521.9L441.51,511.7L439.02,506.41L429.45,503.9L428.35,497.95L433.97,496.77L434.14,493.63L438,492.24L431.25,489.79L429.3,484.4L431.89,480.22L429.38,477.58L432.46,473.86L429.32,470.45L431.09,470.04L429.13,469.49L430.61,462.96L428.73,458.58L433.18,453.37L432.58,449.51L432.58,449.51L438.97,443.05L447.1,439.75L447.26,436.43L456.42,433.96L460.93,425.3L466.02,421.11L467.93,422.15z"
                    />
                    <path
                      id="pl-pd"
                      title="Podlaskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M533.71,44.88L542.51,47.58L541.5,49.73L545.56,51.62L544.44,54.51L547.42,56.32L550.69,54.64L556.19,60.37L562.48,61.36L571.59,71.68L574.13,80.71L571.31,87.58L575.39,111.29L590.71,162.2L597.88,173.89L595.1,181.63L599.62,193.96L597.8,196.08L599.14,218.74L586.72,229.34L580.84,229.37L570.73,234.7L552.88,261.59L552.88,261.59L550.02,261.42L550.02,261.42L548.75,259.77L545.21,261.4L544.69,257.41L538.84,252.96L532.64,254.14L526.69,251.6L525.29,253.48L523.9,250.78L516.18,250.7L512.04,241.8L512.98,237.83L504.83,228.71L509.12,224.22L508.56,210.71L504.26,209.9L501.11,213.68L498.08,211.71L495.86,205.81L499.57,203.91L497.67,204.32L497.17,200.71L494.14,200.58L493.88,203.44L483.17,204.23L480.4,197.86L482.52,195.72L473.51,188.71L474.59,185.09L477.16,185.8L477.17,182.5L472.73,183.57L469.1,178.1L464.59,178.65L462.28,175.87L461.79,167.95L457.92,162.77L459.98,163.14L460.59,157.59L464.71,158.07L459.62,156.05L461.51,152.41L456.33,140.85L456.33,140.85L461.82,139.6L472.44,143.16L476.28,137.97L480.31,136.64L482.63,139.05L502.73,122.83L506.65,120.2L509.59,122.01L509.03,118.71L516.57,114.79L517.93,116.52L519.23,112.63L524.75,110.05L529.53,100.02L528.8,94.94L518.46,81.22L519.93,76.82L517.33,71.84L514.58,72.33L509.92,66.41L512.56,62.04L520,58.04L528.27,57.07L529.02,49.56L529.02,49.56z"
                    />
                    <path
                      id="pl-pm"
                      title="Pomorskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M254.76,0l22.84,13.61l9.27,8.47l-0.74,3.58l-6.45,-9.89L262.46,5.04l-1.71,6.17l4.71,3.71l-0.1,6.56l2.89,-0.88l3.06,9.5l-3.76,0.51l3.28,1.51l0.32,8.05l3.81,4.16l5.99,0.86l-2.08,0.64l2.63,2.59l9.97,2.94l2.77,-2.08l3.63,2.26l12.67,-0.89l13.08,-3.12l13.69,-6.93l-14.48,8.71l-11.38,3.15l2.31,6.46l0,0l3.71,6.59l-4.4,3.62l-1.75,10.98l4.45,2.02l0.01,3.59l7.25,1.8l-0.14,6.25l11.07,-2.41l-6.83,18.98l-2.14,-3.21l-7.87,-0.26l-0.98,6.62l-4.71,5.03l-0.16,5.17l-5.21,3.54l0.45,2.92l0,0l-9.22,-1.2l-5.48,1.93l0.17,-1.83l-8.36,-1.09l-1.84,-3.84l1.82,-5.83l-7.05,0.47l-6.15,4.12l-2.14,-5.07l-3.46,1.85l-11.98,-1.53l0.25,-4.36l-6.09,0.04l-5.86,-4.06l-4.25,6.08l-3.58,-3.4l-5.3,-0.53l1.95,5.15l-8.97,2.12l-1.32,8.96l-3.92,0.18l0.92,2.94l-3.89,-2.65l-5.08,1.19l-0.85,-3.63l-5.46,4.04l-1.83,9.57l0,0l-9.17,-4.51l-8.86,-0.87l-5.84,2.57l0.02,-3.3l-3.11,0.58l-3.44,-11.61l0,0l-2.17,-9.18l5.27,-5.36l-4.44,-3.3l0.03,-3.76l5.98,-0.56l0.81,-3.42l-6.46,-3.65l-2.17,-5.98l-3.01,1.82l0.73,-14.09l-5.46,-10.1l9.16,-7.3l-3.55,-8.57l2.7,-0.69l-0.42,-7.69l-7.18,-12.72l0,0l10.51,-2.71l22.06,-14.65l42.29,-10.21L254.76,0z"
                    />
                    <path
                      id="pl-sl"
                      title="Śląskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M277.31,382.27L290.53,381.76L294.69,377.71L311.3,388.71L313.58,384.34L317.47,383.06L319.38,388.25L323.07,387.18L328.23,398.32L333.81,396.34L338.67,398.85L339.04,401.85L343.61,400.76L343.61,400.76L348.89,404.83L343.76,411.31L340.87,410.53L342.3,414.51L349.44,415.32L351.52,417.05L349.95,420.4L354.08,421.03L345.82,430.47L352.72,431.9L355.72,435.23L355.72,435.23L357.04,438.07L352.65,438.21L349.73,441.49L330.19,443.49L328.61,448.09L325.78,447.61L327.81,452.48L320.21,452.87L316.8,455.55L324.07,461.69L323.39,463.82L318.96,465.52L318.75,469.3L314.64,469.88L313.58,472.68L312.97,470.79L311.83,476.94L307.95,477.57L302.82,487.92L309.68,487.54L308.6,496.3L315.99,495.69L317.97,503.41L325.24,504.58L325.91,507.8L321.3,512.14L327.26,514.57L326.43,519.86L326.43,519.86L319.83,526.99L313.8,527.4L309.61,538.62L296.53,540.19L296.05,530.05L287.76,528.2L285.95,513.81L274.84,509.5L271.62,490.75L266.52,492.39L257.03,488.17L256.14,491.35L249.28,483.49L243.74,483.83L238.75,477.1L238.75,477.1L241.13,472.86L240.47,466.63L251.91,464.66L251.11,462.91L258.23,458.79L262.75,459.77L258.54,449.42L260.75,446.34L259.87,437.21L266.1,439.57L263.25,431.42L273.69,430.95L273.39,425.67L269.28,423.89L266.56,416.4L272.2,412.2L267.89,407.01L274.88,400.61L274.45,391.39L279.14,385.57z"
                    />
                    <path
                      id="pl-sk"
                      title="Świętokrzyskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M384.93,353.46L390.36,354.3L389.05,357.2L392.58,364.71L395.77,363.73L401.42,368.62L400.71,373.05L402.65,370.87L411.15,375.33L413.46,371.06L419.71,373.51L423.39,372.29L424.87,366.77L427.1,369.44L425.35,372.6L429.8,375.04L429.13,379.73L441.29,379.29L448.12,386.33L450.96,381.99L457.19,380.28L465.89,383.88L469.08,381.04L469.08,381.04L472.83,405.9L472.83,405.9L467.93,422.15L466.02,421.11L460.93,425.3L456.42,433.96L447.26,436.43L447.1,439.75L438.97,443.05L432.58,449.51L432.58,449.51L430.6,451.88L428.03,449.53L423.38,453.17L413.33,454.19L409.8,457.35L406.98,455.81L400.15,463.2L384.25,465.08L379.69,457.33L381.26,455.31L377.03,452.24L379.53,448.5L375.42,438.63L358.04,433.84L355.72,435.23L355.72,435.23L352.72,431.9L345.82,430.47L354.08,421.03L349.95,420.4L351.52,417.05L349.44,415.32L342.3,414.51L340.87,410.53L343.76,411.31L348.89,404.83L343.61,400.76L343.61,400.76L349.45,394.22L348.57,388.91L351.47,381.84L360.92,390.15L362.71,380.92L358.04,379.46L359.15,367.99L373.43,367.82L374.59,362.49L381.37,364.62L381.45,357.44z"
                    />
                    <path
                      id="pl-wm"
                      title="Warmińsko-Mazurskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M349.54,42.09L447.16,54.74L529.02,49.56L529.02,49.56L528.27,57.07L520,58.04L512.56,62.04L509.92,66.41L514.58,72.33L517.33,71.84L519.93,76.82L518.46,81.22L528.8,94.94L529.53,100.02L524.75,110.05L519.23,112.63L517.93,116.52L516.57,114.79L509.03,118.71L509.59,122.01L506.65,120.2L502.73,122.83L482.63,139.05L480.31,136.64L476.28,137.97L472.44,143.16L461.82,139.6L456.33,140.85L456.33,140.85L447.34,142.4L441.91,146.9L436.57,145.86L423.09,155.74L415.85,153.17L415.22,157.26L412.04,157.03L410.72,160.08L402.65,158.06L398.89,164.28L392.57,166.96L386.63,164.84L381.79,168.59L382.45,173.28L378.11,175.85L367.4,175.14L364.98,172.91L357.74,174.87L353.57,172.1L353.84,168.1L348.73,171.12L349.39,175.11L344.22,174.33L344.22,174.33L342.97,166.72L339.81,165.98L342.29,162.19L339.59,154.53L330.46,155.3L329.03,151.59L325.1,152.36L321.42,147.28L316.29,149.77L314.39,148.4L309.92,131.72L306.5,130.19L306.5,130.19L306.06,127.26L311.27,123.72L311.43,118.55L316.14,113.51L317.13,106.9L324.99,107.16L327.13,110.36L333.96,91.38L322.89,93.79L323.03,87.54L315.78,85.73L315.77,82.15L311.32,80.12L313.07,69.14L317.47,65.51L313.77,58.93L313.77,58.93L320.71,59.96L322.43,58L320.79,64.66L328.05,54.14L338.74,50.42L343.43,42.43z"
                    />
                    <path
                      id="pl-wp"
                      title="Wielkopolskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M169.13,122.7L172.56,134.31L175.68,133.72L175.66,137.02L181.49,134.45L190.36,135.32L199.53,139.83L199.53,139.83L190.69,151.26L191.88,154.72L196.27,154.45L202.31,162.52L200.83,166.61L195.32,167.87L196.32,174.04L199.54,175.35L197.15,176.55L194.11,190.09L207.3,196.93L206.4,210.99L200.62,211.31L200.29,214.23L205.34,217.03L204.38,221.75L207.56,222.61L214.19,218.93L217.07,229.75L222.23,224.13L222.64,226.43L224.02,224.11L229.1,225.72L231.95,231.34L236.43,232.19L235.95,235.66L242.52,234.72L242.33,238.08L248.66,239.55L249.15,241.73L252.6,241.92L259.12,235.81L260.36,243.07L268.61,240.2L278.41,247.19L282.75,256.67L292.39,253.35L292.97,249.99L300.57,256.7L300.57,256.7L299.58,262.75L303.84,263.3L303.16,269.23L293.36,269.18L293.31,280.79L288.04,280.92L287.17,283.62L280.06,283.03L280.88,292.6L284.94,296.35L278.7,307.04L268.17,306.07L267.41,303.84L263.47,307.05L261.83,318.7L258.3,323.2L259.95,341.27L256.6,346.78L248.39,344.41L249.06,349.3L241.79,352.97L243.65,361.72L247.93,361.15L246.46,370.58L246.46,370.58L229.74,377.42L225.77,375.91L227.62,370.53L224.52,368.97L224.52,368.97L221.27,363.7L221.47,355.26L219.25,354.06L221.04,347.32L209.1,348.36L206.92,338.45L211.05,335.23L204.26,326.62L193.85,324.65L188.83,326.29L188.15,332.37L173.41,334.53L163.31,329.15L161.41,324.59L153.58,323.34L155.07,318.67L152.87,314.45L148.01,311.13L140.28,311.05L140.28,311.05L138.07,304.5L132.61,299.9L129.61,299.1L126.86,302.61L120.79,300.25L123,297.13L122.12,290.45L115.71,292.3L112.06,287.46L113.36,282.63L109.83,283.3L105.56,278.82L108.84,251.03L103.29,246.25L108.56,245.22L101.48,229.05L102.57,218.9L111.24,216.88L110.6,209.69L108,208.56L113.09,204.03L112.26,185.59L112.26,185.59L121.71,188.98L133.79,185.44L139.45,171.59L145.8,171.07L148.73,165.19L153.5,167.27L152.92,161.82L157.83,157.78L143.63,149.81L141.96,141.32L154.26,140.25L158.68,136.64L160.57,126.32L164.88,124.12L166.05,125.97z"
                    />
                    <path
                      id="pl-zp"
                      title="Zachodniopomorskie"
                      className="land"
                      onClick={e => this.changeMap(e)}
                      d="M11.44,101.98l4.79,0.56l-2.96,4.56L9.72,102L11.44,101.98zM12.71,100.79l1.72,1.45l-2.8,-0.02L12.71,100.79zM7.71,95.29l1.81,-0.17l-2,2.57l5.6,9.49l-7.62,-6.1l-1.69,-4.76L7.71,95.29zM38.68,90.81l-3.27,1.79l0.43,-3.07L38.68,90.81zM39.3,85.29l-4.4,2.66l0.06,5.87l-6.51,14.04l-1.28,-5.2l-8.61,-1.35l0.56,-4l-8.95,4.52l-2.03,-3.81l1.73,-2.6l6.88,0.43l6.12,-4.69L39.3,85.29zM158.95,28.15l7.18,12.72l0.42,7.69l-2.7,0.69l3.55,8.57l-9.16,7.3l5.46,10.1l-0.73,14.09l3.01,-1.82l2.17,5.98l6.46,3.65l-0.81,3.42l-5.98,0.56l-0.03,3.76l4.44,3.3l-5.27,5.36l2.17,9.18l0,0l-3.08,3.27l-1.17,-1.85l-4.3,2.2l-1.9,10.33l-4.41,3.6l-12.31,1.07l1.68,8.48l14.19,7.97l-4.91,4.04l0.59,5.45l-4.77,-2.09l-2.94,5.88l-6.34,0.52l-5.66,13.86l-12.09,3.53l-9.45,-3.38l0,0l1.5,-6.34l-8.12,-1.94l-7.52,13.02l-2.41,-1.22l-2.64,2.23l-5.7,-3.19l-11.51,6.61l-4.55,-1.01l2.15,6.48l-14.94,6.38l-10.05,-5.1l-2.04,2.75l2.05,1.91l-3.88,1.21l0.78,3.01l-3.97,3.2l-3.25,11.53l-2.26,1.44l-4.71,-2.56l-2.02,5.36l0,0L5.82,208.26L0,206.08l2.31,-4.67l-1,-7.74l12.2,-9.21l1.97,-14.94l4.31,-6.45l-8.53,-28.75l-1.32,-20.47l7.48,6.54l5.85,1.22l5.74,7.4l1.33,-6.18l-2.96,-0.14l-1.95,-4.79l1.67,-6.2l3.01,-0.49l2.18,-13.12l4.41,-4.58l2.15,1.58l2.8,-10.88l-4.76,0.78l34.65,-12.91l49.02,-13.04l10.18,-8.13l15.9,-19.6L158.95,28.15z"
                    />
                  </g>
                </svg>
              </div>

              <div className="map-land-info">
                <h2 className="map-land-info__title">Wybieram:
                  {this.state.activeLand}
                </h2>
                <Link to={"/voivodeship/" + this.state.activeLand}> Wejdź</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Map;
