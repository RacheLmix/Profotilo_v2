import { useOutletContext } from "react-router-dom";
import { 
  PlayCircle, Clock, Mic2, MonitorPlay, CheckSquare, Music, ChevronDown 
} from "lucide-react";

function Dashboard() {
  const { user } = useOutletContext();

  return (
    <div className="dashboard-grid">
      {/* CỘT 1 - NGUYÊN VĂN CODE CỦA BẠN */}
      <div className="column-left">
        <div className="card hero-card animate-fade-up delay-1">
          <div className="hero-content">
            <p>Project Sekai</p>
            <h2>Welcome! to our<br/>my name is {user?.name}</h2>
            <button className="btn-primary">Play Now</button>
          </div>
          <img 
            src="../../../public/img/char.png" 
            alt="Character" 
            className="hero-image"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>

        <div className="section-title animate-fade-up delay-1">
          New Courses <a href="#" className="view-all">view all</a>
        </div>
        <div className="courses-grid animate-fade-up delay-1">
          <div className="course-card">
            <div className="course-icon"><Music size={20} /></div>
            <h4>Songwriting &<br/>Arrangement</h4>
            <div className="course-meta">
              <span>Duration<br/>4 weeks</span>
              <span>Rate<br/>10/10</span>
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"><MonitorPlay size={20} /></div>
            <h4>Stage<br/>Performance</h4>
            <div className="course-meta">
              <span>Duration<br/>3 weeks</span>
              <span>Rate<br/>10/10</span>
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"><Mic2 size={20} /></div>
            <h4>Recording &<br/>Production Basics</h4>
            <div className="course-meta">
              <span>Duration<br/>3 weeks</span>
              <span>Rate<br/>10/10</span>
            </div>
          </div>
        </div>

        <div className="section-title animate-fade-up delay-2">Video Activity</div>
        <div className="card video-activity animate-fade-up delay-2">
          <p>Total hours watched</p>
          <div className="progress-container">
            <div className="progress-bar-bg">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-text">65%</span>
          </div>
        </div>
      </div>

      {/* CỘT 2 - NGUYÊN VĂN CODE CỦA BẠN */}
      <div className="column-middle">
        <div className="section-title animate-fade-up delay-2">
          Collection Card <a href="#" className="view-all">view all</a>
        </div>
        <div className="collection-list animate-fade-up delay-2">
          <div className="collection-item">
            <div className="col-info">
              <h4>Birthday Card</h4>
              <p>all ways jump! with you</p>
            </div>
            <img src="https://i.pravatar.cc/100?img=32" alt="Card" className="col-img"/>
          </div>
          <div className="collection-item">
            <div className="col-info">
              <h4>World Link</h4>
              <p>our starry sky leading to...</p>
            </div>
            <img src="https://i.pravatar.cc/100?img=33" alt="Card" className="col-img"/>
          </div>
        </div>

        <div className="section-title animate-fade-up delay-3" style={{marginTop: '32px'}}>Subscription</div>
        <div className="card sub-card animate-fade-up delay-3">
          <div className="sub-item"><h5>Active Plan</h5><p>Standard - Premium</p></div>
          <div className="sub-item"><h5>Available Plan</h5><p>Monthly - Annual - Others</p></div>
          <div className="sub-item"><h5>For you</h5><p className="trial">1 month free trial</p></div>
          <button className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>Upgrade to Pro</button>
        </div>

        <div className="card animate-fade-up delay-3" style={{marginTop: '20px', padding: '24px 32px'}}>
           <div className="sub-item">
            <h5>Payment</h5>
            <p style={{fontSize: '14px', marginTop: '4px'}}>Renewal<br/>20 September 2025</p>
          </div>
        </div>
      </div>

      {/* CỘT 3 - NGUYÊN VĂN CODE CỦA BẠN */}
      <div className="column-right">
        <div className="section-title animate-fade-up delay-2">
          Notifications <a href="#" className="view-all">See all <ChevronDown size={14}/></a>
        </div>
        <div className="notify-list animate-fade-up delay-2">
          <div className="notify-item">
            <Clock size={24} className="notify-icon" />
            <div className="notify-text">
              <h4>Band practice starts in 30 minutes</h4>
              <p>Make sure your gear's ready!</p>
            </div>
          </div>
          <div className="notify-item">
            <Music size={24} className="notify-icon" />
            <div className="notify-text">
              <h4>Lyrics finalized, ready to rehears</h4>
              <p>Bring your best voice</p>
            </div>
          </div>
          <div className="notify-item">
            <CheckSquare size={24} className="notify-icon" />
            <div className="notify-text">
              <h4>Outfit check: match your band style</h4>
              <p>Look sharp, sound sharp</p>
            </div>
          </div>
        </div>

        <div className="card popular-video-card animate-fade-up delay-3">
          <img 
            src="https://i.pinimg.com/736x/7e/7a/94/7e7a940391f7120b3991c2be4eccd6a4.jpg" 
            alt="Popular Video" 
            className="video-thumbnail"
          />
          <h4>The Beginning of Something New</h4>
          <p>Most Popular Video</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;