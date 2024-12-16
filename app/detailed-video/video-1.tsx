interface Video1Props {
  videoId?: string | null;
}

const Video1: React.FC<Video1Props> = ({ videoId }) => {
  return (
    <div className="w-full h-full">
      <video controls className="w-screen ">
        <source src="/wedding.mp4" type="video/mp4" />
        Your br /owser does not support the video tag.
      </video>
      <div className="py-10 px-20 text-[#F2C78B] font-vietnam flex flex-col gap-10">
        <h1 className="font-bold text-center text-[2rem] w-3/4 mx-auto">
          Who is a Vedic Soulmate ? how do you find that special person ?
        </h1>
        <p className="text-[1.5rem] font-regular">
          In common understanding, a ‘soulmate’ typically means your ‘other
          half’ or your ‘missing piece’ - that somewhere out there is a perfect
          half who will ‘complete me once I find them’.
          <br />
          We then become so enamoured with finding the soulmate of our dreams
          that we forget to look at the reality of each other’s current
          situation, and the potential to create a future together with our life
          partner.
          <br />
          Relationships based solely on this ideal ultimately fail if they do
          not also have a strong dharmic connection.
          <br />
          <br />
          On the other hand, in the Vedic tradition, everyone with whom we have
          karma, is in a sense our soulmate.
          <br />
          Unfortunately, the word karma scares most people. We always think of
          it as something very heavy, burdensome, dreadful, and a lot of work -
          but it is not like that.
          <br />
          Karma with someone helps us evolve and grow and become our best
          selves.
          <br />
          <br />
          The question becomes: when matching with potential life partners, how
          do we find someone with whom we have a strong enough connection, but
          with whom the karma isn’t so dreadful that we’re going to hate every
          minute being with them?
          <br />
          How do we find someone with whom we can evolve? And is it possible to
          find the Platonic ideal - our perfect half - with whom we can have our
          karmic cake and eat it too?
          <br />
          <br />
          This is where Vedic Soulmate comes in, helping you find not just
          somebody who makes you feel ‘whole’ – but someone who will help you
          live your dharma and what each partner needs to work on to best
          support the other’s dharma.
          <br />
          In the Vedic tradition, a strong dharmic connection is necessary for a
          fulfilling married life.
          <br />
          <br />
          But to find your Vedic Soulmate, you need to know yourself first.
          <br />
          Knowing yourself is half the job done! Finding the right partner
          requires deeply understanding yourself first and setting realistic
          expectations about the right partner for you.
          <br />
          <br />
          We will first create Your Astro Marriage Profile to help you deeply
          understand your natural personality traits, mindset, interests,
          attitudes, behaviour, and other such parameters on which mutual
          compatibility with a prospective partner can be built.
        </p>
      </div>
    </div>
  );
};

export default Video1;
