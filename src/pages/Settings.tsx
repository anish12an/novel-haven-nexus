import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Book, 
  Palette, 
  Download, 
  Trash2,
  Save,
  Moon,
  Sun,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [profile, setProfile] = useState({
    username: "BookwormExtraordinaire",
    displayName: "Alex Chen",
    email: "alex.chen@example.com",
    bio: "Passionate reader and aspiring author. I love diving into fantasy worlds and crafting my own magical stories.",
    avatar: "",
    website: "",
    location: "San Francisco, CA",
  });

  const [notifications, setNotifications] = useState({
    newChapters: true,
    novelUpdates: true,
    reviews: true,
    followers: true,
    recommendations: false,
    newsletter: true,
    emailDigest: "weekly",
  });

  const [reading, setReading] = useState({
    fontSize: 18,
    fontFamily: "serif",
    lineHeight: 1.8,
    theme: "auto",
    autoBookmark: true,
    readingReminders: true,
    downloadForOffline: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    readingHistoryVisible: true,
    showOnlineStatus: true,
    allowMessages: "friends",
    dataSaving: false,
  });

  const handleProfileSave = () => {
    console.log("Saving profile:", profile);
  };

  const handleNotificationsSave = () => {
    console.log("Saving notifications:", notifications);
  };

  const handleReadingSave = () => {
    console.log("Saving reading preferences:", reading);
  };

  const handlePrivacySave = () => {
    console.log("Saving privacy settings:", privacy);
  };

  const handleExportData = () => {
    console.log("Exporting user data...");
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Deleting account...");
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
              <User className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold">Settings</h1>
          </div>
          <p className="text-muted-foreground">
            Manage your account preferences and customize your NovelVerse experience
          </p>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="reading">Reading</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profile.avatar} alt={profile.displayName} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">
                      {profile.displayName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2">
                    <Button variant="outline">Change Avatar</Button>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG or WebP. Max size 5MB.
                    </p>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={profile.displayName}
                      onChange={(e) => setProfile(prev => ({ ...prev, displayName: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={profile.username}
                      onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={profile.website}
                      onChange={(e) => setProfile(prev => ({ ...prev, website: e.target.value }))}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="City, Country"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    rows={4}
                    placeholder="Tell others about yourself..."
                  />
                  <p className="text-sm text-muted-foreground">
                    {profile.bio.length}/500 characters
                  </p>
                </div>

                <Button onClick={handleProfileSave} className="bg-gradient-primary hover:shadow-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newChapters">New chapters from followed novels</Label>
                      <p className="text-sm text-muted-foreground">Get notified when new chapters are published</p>
                    </div>
                    <Switch
                      id="newChapters"
                      checked={notifications.newChapters}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, newChapters: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="novelUpdates">Novel updates and announcements</Label>
                      <p className="text-sm text-muted-foreground">Author updates, hiatus notices, completion announcements</p>
                    </div>
                    <Switch
                      id="novelUpdates"
                      checked={notifications.novelUpdates}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, novelUpdates: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="reviews">Reviews and ratings on your novels</Label>
                      <p className="text-sm text-muted-foreground">When someone reviews your published works</p>
                    </div>
                    <Switch
                      id="reviews"
                      checked={notifications.reviews}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, reviews: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="followers">New followers</Label>
                      <p className="text-sm text-muted-foreground">When someone starts following you</p>
                    </div>
                    <Switch
                      id="followers"
                      checked={notifications.followers}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, followers: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="recommendations">Personalized recommendations</Label>
                      <p className="text-sm text-muted-foreground">Novel suggestions based on your reading history</p>
                    </div>
                    <Switch
                      id="recommendations"
                      checked={notifications.recommendations}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, recommendations: checked }))}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newsletter">Newsletter</Label>
                      <p className="text-sm text-muted-foreground">Platform updates and featured content</p>
                    </div>
                    <Switch
                      id="newsletter"
                      checked={notifications.newsletter}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, newsletter: checked }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailDigest">Email digest frequency</Label>
                    <Select value={notifications.emailDigest} onValueChange={(value) => setNotifications(prev => ({ ...prev, emailDigest: value }))}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Never</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleNotificationsSave} className="bg-gradient-primary hover:shadow-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Save Notifications
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reading Tab */}
          <TabsContent value="reading" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Reading Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fontSize">Default Font Size</Label>
                    <Select value={reading.fontSize.toString()} onValueChange={(value) => setReading(prev => ({ ...prev, fontSize: parseInt(value) }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="14">Small (14px)</SelectItem>
                        <SelectItem value="16">Medium (16px)</SelectItem>
                        <SelectItem value="18">Large (18px)</SelectItem>
                        <SelectItem value="20">Extra Large (20px)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fontFamily">Font Family</Label>
                    <Select value={reading.fontFamily} onValueChange={(value) => setReading(prev => ({ ...prev, fontFamily: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="serif">Serif (Playfair Display)</SelectItem>
                        <SelectItem value="sans">Sans-serif (Inter)</SelectItem>
                        <SelectItem value="mono">Monospace</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="theme">Reading Theme</Label>
                  <Select value={reading.theme} onValueChange={(value) => setReading(prev => ({ ...prev, theme: value }))}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4" />
                          <span>Auto (System)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="light">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          <span>Light</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center gap-2">
                          <Moon className="h-4 w-4" />
                          <span>Dark</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoBookmark">Auto-bookmark progress</Label>
                      <p className="text-sm text-muted-foreground">Automatically save your reading position</p>
                    </div>
                    <Switch
                      id="autoBookmark"
                      checked={reading.autoBookmark}
                      onCheckedChange={(checked) => setReading(prev => ({ ...prev, autoBookmark: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="readingReminders">Reading reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminded to continue reading your novels</p>
                    </div>
                    <Switch
                      id="readingReminders"
                      checked={reading.readingReminders}
                      onCheckedChange={(checked) => setReading(prev => ({ ...prev, readingReminders: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="downloadForOffline">Download for offline reading</Label>
                      <p className="text-sm text-muted-foreground">Save chapters locally for offline access</p>
                    </div>
                    <Switch
                      id="downloadForOffline"
                      checked={reading.downloadForOffline}
                      onCheckedChange={(checked) => setReading(prev => ({ ...prev, downloadForOffline: checked }))}
                    />
                  </div>
                </div>

                <Button onClick={handleReadingSave} className="bg-gradient-primary hover:shadow-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Save Reading Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="profileVisibility">Profile Visibility</Label>
                  <Select value={privacy.profileVisibility} onValueChange={(value) => setPrivacy(prev => ({ ...prev, profileVisibility: value }))}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allowMessages">Who can message you</Label>
                  <Select value={privacy.allowMessages} onValueChange={(value) => setPrivacy(prev => ({ ...prev, allowMessages: value }))}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="everyone">Everyone</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="nobody">Nobody</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="readingHistoryVisible">Show reading history</Label>
                      <p className="text-sm text-muted-foreground">Let others see what you're reading</p>
                    </div>
                    <Switch
                      id="readingHistoryVisible"
                      checked={privacy.readingHistoryVisible}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, readingHistoryVisible: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="showOnlineStatus">Show online status</Label>
                      <p className="text-sm text-muted-foreground">Display when you're active on the platform</p>
                    </div>
                    <Switch
                      id="showOnlineStatus"
                      checked={privacy.showOnlineStatus}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, showOnlineStatus: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dataSaving">Data saving mode</Label>
                      <p className="text-sm text-muted-foreground">Reduce data usage by limiting image loading</p>
                    </div>
                    <Switch
                      id="dataSaving"
                      checked={privacy.dataSaving}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, dataSaving: checked }))}
                    />
                  </div>
                </div>

                <Button onClick={handlePrivacySave} className="bg-gradient-primary hover:shadow-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Save Privacy Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Account Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Change Password</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Update your password to keep your account secure
                    </p>
                    <Button variant="outline">
                      Change Password
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <Badge variant="outline" className="mb-4">Not Enabled</Badge>
                    <br />
                    <Button variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Enable 2FA
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Export Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download a copy of your reading history, bookmarks, and account data
                    </p>
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="h-4 w-4 mr-2" />
                      Export My Data
                    </Button>
                  </div>

                  <Separator />

                  <div className="p-4 border border-destructive rounded-lg bg-destructive/5">
                    <h3 className="font-semibold mb-2 text-destructive">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive" onClick={handleDeleteAccount}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;