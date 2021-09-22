package com.beeveloper.beathub.music.repository;

import com.beeveloper.beathub.music.domain.Commit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommitRepository extends JpaRepository<Commit, Long> {
}
