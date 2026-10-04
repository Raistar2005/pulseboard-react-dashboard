import {
  Mail,
  MoreHorizontal,
} from "lucide-react";

export default function ProfileCard() {

  return (

    <div className="panel profile-panel">

      <div className="panel-header">

        <div>

          <h3>
            Profile
          </h3>

          <p>
            Account overview
          </p>

        </div>

        <MoreHorizontal size={20} />

      </div>

      <div className="profile-main">

        <div className="profile-avatar">
          SP
        </div>

        <h3>
          Sahil Pratap Singh
        </h3>

        <span className="role">
          Frontend Developer
        </span>

        <div className="profile-email">

          <Mail size={15} />

          sahilravindra06@gmail.com

        </div>

      </div>

      <div className="profile-stats">

        <div>
          <strong>24</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>8.4k</strong>
          <span>Users</span>
        </div>

        <div>
          <strong>98%</strong>
          <span>Rating</span>
        </div>

      </div>

    </div>

  );
}